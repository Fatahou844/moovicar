import { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import "../../styles/style.css";
function PerformanceItem({ propsData }) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotateValue = (propsData.percentage / 100) * 360; // Calcule la rotation en fonction du pourcentage
    setRotation(rotateValue);
  }, [propsData.percentage]);
  return (
    <div className="card px-2 py-2" style={{ backgroundColor: "#e9ecef" }}>
      <div className="row">
        <div className="col-md-4">
          <GaugeChart
            id="gauge-chart4"
            nrOfLevels={10}
            arcPadding={0.1}
            cornerRadius={3}
            percent={0.9}
          />
        </div>
        <div className="col-md-4">
          <h3>Taux d’acceptation</h3>
          <p>Hôtes Stars : 90 %</p>
          <p>Vous avez accepté 1 demande sur 1.</p>
        </div>
      </div>
    </div>
  );
}

export default PerformanceItem;
