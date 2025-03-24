export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          {/* 초기 투자금 */}
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          {/* 연간 투자금 */}
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          {/* 예상 수익 */}
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          {/* 기간 */}
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
