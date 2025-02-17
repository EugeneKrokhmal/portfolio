const BlurLayers = () => {
    const layers = [
      { blur: "20px", gradient: "linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)" },
      { blur: "10px", gradient: "linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)" },
      { blur: "5px", gradient: "linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)" },
      { blur: "2.5px", gradient: "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)" },
      { blur: "1.25px", gradient: "linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)" },
      { blur: "0.625px", gradient: "linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)" },
      { blur: "0.3125px", gradient: "linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)" },
      { blur: "0.15625px", gradient: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)" }
    ];
  
    return (
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {layers.map((layer, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: index + 1,
              backdropFilter: `blur(${layer.blur})`,
              maskImage: layer.gradient,
              borderRadius: 0,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>
    );
  };
  
  export default BlurLayers;
  