import { useState } from "react";

// Import your assets
import one from "./assets/1.jpeg";
import two from "./assets/2.jpeg";
import three from "./assets/3.jpeg";
import four from "./assets/4.jpeg";
import five from "./assets/5.jpeg";
import six from "./assets/6.jpeg";
import seven from "./assets/7.jpeg";
import eight from "./assets/8.jpeg";
import nine from "./assets/9.jpeg";
import ten from "./assets/10.jpeg";
import v1 from "./assets/v1.mp4";

export default function BirthdaySite() {
  const [page, setPage] = useState(0);
  const [showLove, setShowLove] = useState(false); // State for the cake surprise

  const IMAGES = [one, two, three, four, five, six, seven, eight, nine, ten];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-3 sm:p-4 text-center">
      
      {/* PAGE 1 */}
      {page === 0 && (
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">👀 I have something for you</h1>
          <button
            onClick={() => setPage(1)}
            className="bg-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-pink-600 transition-all"
          >
            Click Me 😌
          </button>
        </div>
      )}

      {/* PAGE 2 */}
      {page === 1 && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md">
          <h1 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">🎉 Congratulations 🎉</h1>
          <p className="text-base sm:text-lg mb-4">For being 1 year more older 😭 my big bro 💀</p>
          <img
            src="https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif"
            alt="monkey"
            className="rounded-xl mx-auto mb-6 w-full max-w-[250px]"
          />
          <button
            onClick={() => setPage(2)}
            className="bg-purple-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-600 transition-all"
          >
            Move to Next ➡️
          </button>
        </div>
      )}

      {/* PAGE 3 */}
      {page === 2 && (
        <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-2xl w-full max-w-8xl mx-auto overflow-y-auto max-h-[95vh]">
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">🎂 Happy Birthday Bro ❤️</h1>

          <div className="text-left mb-8 bg-pink-50 p-6 rounded-2xl border-l-4 border-pink-400">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              ahummmmm, First of alll, thank you so much for being such an amazing brother! 
              Thank you for being the person who has stayed by my side through every high and low. 
              You are the only person I know who can listen to all my problems, my rants, and my chaotic thoughts without a single complaint, and honestly, I don’t know where I’d be without that. 
              You’ve got this unique mix of being the funniest person in the room one minute and being completely moody the next, but that’s just part of the 'big bro' package that I’ve grown to love. 
              <br /><br />
              I also want to take a second to talk about your wildlife photography. Seeing the world through your lens is truly something special. The way you capture life in its rawest, most beautiful forms is incredible, and I am genuinely your biggest fan. 
              I hope you know how much I believe in your talent. My biggest wish for you this year is that you achieve the massive success you deserve in your photography journey. 
              Keep chasing those perfect shots, keep exploring the wild, and most importantly, keep on spreading joy with your photos.
              Aaise hi rhena hamesaa . Happiest Birthday 💖
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {IMAGES.map((src, i) => (
              <div key={i} className="relative w-full aspect-square rounded-xl overflow-hidden shadow-sm border-2 border-gray-100">
                <img
                  src={src}
                  alt={`Memory ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* VIDEO SECTION */}
          <div className="mb-8 max-w-2xl mx-auto">
            <video controls className="rounded-xl w-full shadow-md border-4 border-white">
              <source src={v1} type="video/mp4" />
            </video>
          </div>

          {/* THE CAKE BUTTON SURPRISE */}
          <div className="py-6 border-t border-gray-100">
            {!showLove ? (
              <button
                onClick={() => setShowLove(true)}
                className="text-4xl hover:scale-125 transition-transform duration-300 cursor-pointer"
                title="Click the cake!"
              >
                🎂
                click here
              </button>
            ) : (
              <div className="animate-bounce">
                <p className="text-2xl font-bold text-pink-500">Love youuuu! ❤️✨</p>
                <p className="text-sm text-gray-500 mt-2">— Your favorite cousin 😌</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}