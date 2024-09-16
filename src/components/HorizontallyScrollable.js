import { useRef } from 'react';

function HorizontallyScrollable({ children, className = '' }) {
  const scrollRef = useRef();

  const handleMouseDown = (evt) => {
    const oldX = evt.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (evt) => {
      const newX = evt.pageX;
      const offset = newX - oldX;
      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleWheel = (evt) => {
    if (evt.deltaX !== 0) {
      evt.preventDefault();
      scrollRef.current.scrollLeft += evt.deltaX;
    }
  };

  return (
    <div
      className={className}
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      style={{
        overflowX: 'scroll',
        overflowY: 'hidden', 
        cursor: 'grab',
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none; // Hide scrollbar for Chrome, Safari, and Opera
        }
      `}</style>
      {children}
    </div>
  );
}

export default HorizontallyScrollable;
