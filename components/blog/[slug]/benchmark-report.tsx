import styles from "./benchmark-report.module.css";

type BenchmarkRow = {
  family:
    | "Sonnet 5"
    | "Opus 5"
    | "GPT-5.6 Terra"
    | "GPT-5.6 Sol";
  effort: "Low" | "Medium" | "High" | "Max";
  scores: [number, number];
  passRate: number;
  cost: number;
  wallSeconds: number;
  outputTokens: number;
  reasoningTokens: number;
  linesAdded: number;
  linesRemoved: number;
};

const results: BenchmarkRow[] = [
  { family: "Sonnet 5", effort: "Low", scores: [68, 61], passRate: 0, cost: 0.5697, wallSeconds: 134.6, outputTokens: 9216, reasoningTokens: 1135, linesAdded: 87.5, linesRemoved: 6.5 },
  { family: "Sonnet 5", effort: "Medium", scores: [61, 61], passRate: 0, cost: 0.4595, wallSeconds: 98.4, outputTokens: 9409, reasoningTokens: 1793, linesAdded: 81, linesRemoved: 7 },
  { family: "Sonnet 5", effort: "High", scores: [61, 62], passRate: 0, cost: 0.5487, wallSeconds: 134.1, outputTokens: 12985, reasoningTokens: 5541, linesAdded: 105, linesRemoved: 7.5 },
  { family: "Opus 5", effort: "Low", scores: [100, 93], passRate: 0.5, cost: 0.8931, wallSeconds: 86.6, outputTokens: 7678, reasoningTokens: 785, linesAdded: 269, linesRemoved: 33 },
  { family: "Opus 5", effort: "Medium", scores: [100, 100], passRate: 1, cost: 0.9304, wallSeconds: 102.8, outputTokens: 9042, reasoningTokens: 1849, linesAdded: 283, linesRemoved: 33.5 },
  { family: "Opus 5", effort: "High", scores: [100, 100], passRate: 1, cost: 1.1136, wallSeconds: 164.3, outputTokens: 15443, reasoningTokens: 5447, linesAdded: 386, linesRemoved: 40 },
  { family: "Opus 5", effort: "Max", scores: [100, 100], passRate: 1, cost: 1.6273, wallSeconds: 242.6, outputTokens: 22090, reasoningTokens: 10097, linesAdded: 442.5, linesRemoved: 36 },
  { family: "GPT-5.6 Terra", effort: "Low", scores: [85, 100], passRate: 0.5, cost: 0.1491, wallSeconds: 137.4, outputTokens: 5286, reasoningTokens: 874, linesAdded: 165, linesRemoved: 32.5 },
  { family: "GPT-5.6 Terra", effort: "Medium", scores: [100, 100], passRate: 1, cost: 0.1492, wallSeconds: 118.6, outputTokens: 5656, reasoningTokens: 996, linesAdded: 170.5, linesRemoved: 32.5 },
  { family: "GPT-5.6 Terra", effort: "High", scores: [100, 100], passRate: 1, cost: 0.2069, wallSeconds: 176.9, outputTokens: 8881, reasoningTokens: 3238, linesAdded: 235, linesRemoved: 31.5 },
  { family: "GPT-5.6 Sol", effort: "Low", scores: [100, 100], passRate: 1, cost: 0.2723, wallSeconds: 201.6, outputTokens: 5715, reasoningTokens: 796, linesAdded: 209, linesRemoved: 34 },
  { family: "GPT-5.6 Sol", effort: "Medium", scores: [100, 100], passRate: 1, cost: 0.3393, wallSeconds: 241.5, outputTokens: 6972, reasoningTokens: 1966, linesAdded: 237.5, linesRemoved: 25.5 },
  { family: "GPT-5.6 Sol", effort: "High", scores: [100, 100], passRate: 1, cost: 0.545, wallSeconds: 417.7, outputTokens: 12185, reasoningTokens: 4539, linesAdded: 380.5, linesRemoved: 33.5 },
];

const familyClass: Record<BenchmarkRow["family"], string> = {
  "Sonnet 5": styles.sonnet,
  "Opus 5": styles.opus,
  "GPT-5.6 Terra": styles.terra,
  "GPT-5.6 Sol": styles.sol,
};

function average([first, second]: BenchmarkRow["scores"]) {
  return (first + second) / 2;
}

function secondsToTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.round(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

function formatTokens(tokens: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(tokens);
}

export function BenchmarkVideo() {
  return (
    <figure className={styles.videoFigure}>
      <div className={styles.videoFrame}>
        <video
          controls
          playsInline
          preload="metadata"
          poster="/blog/claude-code-vs-codex/benchmark-poster.png"
          aria-label="The agent-bench terminal interface running six Codex benchmark configurations"
        >
          <source src="/blog/claude-code-vs-codex/benchmark-run.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
      <figcaption>
        The harness runs every configuration against an isolated copy of the same seeded task.
      </figcaption>
    </figure>
  );
}

function ScoreChart() {
  return (
    <figure className={styles.chartCard}>
      <div className={styles.figureHeader}>
        <h3>Quality across every configuration</h3>
        <div className={styles.legend} aria-hidden="true">
          <span><i className={styles.runOne} /> Run 1</span>
          <span><i className={styles.runTwo} /> Run 2</span>
        </div>
      </div>
      <div className={styles.scoreScale} aria-hidden="true">
        <span>0</span><span>50</span><span>100</span>
      </div>
      <div className={styles.scoreRows}>
        {results.map((row) => {
          const score = average(row.scores);
          const label = `${row.family}, ${row.effort.toLowerCase()}`;
          return (
            <div className={styles.scoreRow} key={`${row.family}-${row.effort}`}>
              <div className={styles.rowLabel}>
                <span>{row.family}</span>
                <small>{row.effort}</small>
              </div>
              <div
                className={`${styles.scoreTrack} ${familyClass[row.family]}`}
                role="img"
                aria-label={`${label}: scores of ${row.scores[0]} and ${row.scores[1]}, ${score} average`}
              >
                <progress value={score} max="100">{score}</progress>
                <i className={styles.runOne} style={{ left: `${row.scores[0]}%` }} />
                <i className={styles.runTwo} style={{ left: `${row.scores[1]}%` }} />
              </div>
              <strong>{score}</strong>
            </div>
          );
        })}
      </div>
      <figcaption>Each mark is one run; bars show the two-run mean.</figcaption>
    </figure>
  );
}

function CostChart() {
  const reliableResults = results.filter((row) => row.passRate === 1);

  return (
    <figure className={styles.chartCard}>
      <div className={styles.figureHeader}>
        <h3>Cost of a reliable run</h3>
        <span className={styles.unit}>USD / run</span>
      </div>
      <div className={styles.costRows}>
        {reliableResults.map((row) => (
          <div className={styles.costRow} key={`${row.family}-${row.effort}`}>
            <div className={styles.rowLabel}>
              <span>{row.family}</span>
              <small>{row.effort}</small>
            </div>
            <progress
              className={familyClass[row.family]}
              value={row.cost}
              max="1.7"
              aria-label={`${row.family}, ${row.effort.toLowerCase()}: $${row.cost.toFixed(3)} average cost per run`}
            >
              {row.cost}
            </progress>
            <strong>${row.cost.toFixed(3)}</strong>
          </div>
        ))}
      </div>
      <figcaption>Only configurations that passed both runs are included.</figcaption>
    </figure>
  );
}

function ResultsTable() {
  return (
    <figure className={styles.tableFigure}>
      <div className={styles.figureHeader}>
        <h3>All results</h3>
        <span className={styles.unit}>n = 2 per row</span>
      </div>
      <div className={styles.tableScroll}>
        <table>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Effort</th>
              <th scope="col">Score</th>
              <th scope="col">Passes</th>
              <th scope="col">Cost</th>
              <th scope="col">Time</th>
              <th scope="col">Output</th>
              <th scope="col">Reasoning</th>
              <th scope="col">Lines +/−</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row) => (
              <tr key={`${row.family}-${row.effort}`}>
                <th scope="row"><span className={`${styles.modelMark} ${familyClass[row.family]}`} />{row.family}</th>
                <td>{row.effort}</td>
                <td><strong>{average(row.scores)}</strong></td>
                <td><span className={row.passRate === 1 ? styles.pass : styles.partial}>{row.passRate * 2}/2</span></td>
                <td>${row.cost.toFixed(3)}</td>
                <td>{secondsToTime(row.wallSeconds)}</td>
                <td>{formatTokens(row.outputTokens)}</td>
                <td>{formatTokens(row.reasoningTokens)}</td>
                <td>+{row.linesAdded} / −{row.linesRemoved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption>Cost, time, tokens, and code changes are arithmetic means across the two runs.</figcaption>
    </figure>
  );
}

export function BenchmarkResults() {
  return (
    <section className={styles.report} aria-label="Benchmark results">
      <div className={styles.methodLine} aria-label="Benchmark summary">
        <span><strong>26</strong> runs</span>
        <span><strong>13</strong> configurations</span>
        <span><strong>2</strong> trials each</span>
        <span><strong>$0.149</strong> cheapest clean average</span>
      </div>
      <div className={styles.charts}>
        <ScoreChart />
        <CostChart />
      </div>
      <ResultsTable />
    </section>
  );
}
