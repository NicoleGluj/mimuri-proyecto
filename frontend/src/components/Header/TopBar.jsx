import { useEffect, useRef, useState } from "react";

const TopBar = () => {

  // FUNCION TOPBAR TEXTO TIPO CINTA
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [repeatedText, setRepeatedText] = useState("");

  const generateRepeatedText = () => {
    if (!containerRef.current) return "";
    const containerWidth = containerRef.current.offsetWidth;
    const originalText = "Envio gratis en CABA";
    let repeated = originalText + " \u00A0 \u00A0 ";
    let temp = repeated;

    // Creamos repeticiones hasta cubrir 2 veces el ancho del contenedor
    const tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden";
    tempSpan.style.whiteSpace = "nowrap";
    document.body.appendChild(tempSpan);

    tempSpan.textContent = temp;

    while (tempSpan.offsetWidth < containerWidth * 2) {
      temp += repeated;
      tempSpan.textContent = temp;
    }

    document.body.removeChild(tempSpan);
    return temp;
  };

  useEffect(() => {
    const updateText = () => setRepeatedText(generateRepeatedText());
    updateText();
    window.addEventListener("resize", updateText);
    return () => window.removeEventListener("resize", updateText);
  }, []);

  useEffect(() => {
    const text = textRef.current;
    let scrollAmount = 0;
    let animationId;

    const animate = () => {
      scrollAmount += 1; // velocidad
      if (scrollAmount >= text.scrollWidth / 2) scrollAmount = 0;
      text.style.transform = `translateX(-${scrollAmount}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => (animationId = requestAnimationFrame(animate));

    text.addEventListener("mouseenter", handleMouseEnter);
    text.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      text.removeEventListener("mouseenter", handleMouseEnter);
      text.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [repeatedText]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap bg-[#eb9665] text-white text-center p-1 font-medium text-xs uppercase"
    >
      <p ref={textRef}>{repeatedText}</p>
    </div>
  );
};

export default TopBar;
