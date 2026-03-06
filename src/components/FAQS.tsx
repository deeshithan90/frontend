const FAQS = () => {
  const speak2 = () => {
    window.speechSynthesis.cancel()
    const message = new SpeechSynthesisUtterance(
      `
        Welcome to sai enterprises. The complete modular office furniture manufacturer in chennai tamil nadu. Thanks for. choosing us.
     `);
    message.rate = 0.9;
    message.pitch = 1;
    message.volume = 20;

    window.speechSynthesis.speak(message);
  }
  return (
     <a
        className="text-center p-2"
        href="#67"
       ><img src="/fa/fa.png" onClick={speak2} className="w-[100px] h-[100px] text-white fixed bottom-0 right-0"/></a>
  )
}

export default FAQS