const panelRows = Array.from({ length: 18 });
const rings = Array.from({ length: 3 });

export default function Solar3DScene() {
  return (
    <div className="solar-scene" aria-hidden="true">
      <div className="solar-orbit solar-orbit-one" />
      <div className="solar-orbit solar-orbit-two" />
      <div className="solar-orbit solar-orbit-three" />

      <div className="solar-core">
        <div className="solar-flare" />
        {rings.map((_, i) => (
          <span key={i} className={`solar-ring solar-ring-${i + 1}`} />
        ))}
      </div>

      <div className="panel-rig">
        <div className="panel-wing panel-wing-left">
          {panelRows.map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="panel-spine" />
        <div className="panel-wing panel-wing-right">
          {panelRows.map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>

      <div className="energy-path energy-path-a" />
      <div className="energy-path energy-path-b" />
      <div className="energy-path energy-path-c" />
    </div>
  );
}
