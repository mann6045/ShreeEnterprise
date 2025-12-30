"use client";

export default function WhatsAppButton() {
  const phone = "918160675257";
  const message = encodeURIComponent("Hello Shree Enterprise, I am interested in your products.");

  return (
    <>
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn-fixed"
        aria-label="Chat on WhatsApp"
      >
        {/* Simple WhatsApp Icon SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.334.068 7.411a7.618 7.618 0 0 0 1.583 4.887L.062 16l4.98-1.31a7.514 7.514 0 0 0 3.125.688c4.366 0 7.925-3.334 7.925-7.411 0-2.073-.837-3.992-2.197-5.414L13.601 2.326zM7.994 14.398a6.902 6.902 0 0 1-2.923-.535l-.21-.125-2.05 1.082 1.107-2.016-.144-.225a6.938 6.938 0 0 1-1.066-3.805c0-3.665 3.167-6.666 7.072-6.666 1.896 0 3.655.776 4.974 2.155a6.994 6.994 0 0 1 2.05 4.908c0 3.665-3.167 6.666-7.072 6.666z"/>
        </svg>
      </a>

      <style jsx>{`
        .wa-btn-fixed {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background-color: #25d366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
          z-index: 9999;
          transition: transform 0.3s ease;
        }
        .wa-btn-fixed:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}