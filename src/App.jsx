import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Escuchar mensajes de React Native
    const handleMessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Message received from React Native:", message);
    };

    window.addEventListener("message", handleMessage);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      <h1>My React Web App</h1>
    </div>
  );
}

export default App;
