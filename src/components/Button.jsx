import React from 'react'

const Button = () => {
  const reload = () => {
    window.location.reload(true);
  };
  return (
    <button
      type='button'
      className='btn btn-outline-secondary'
      onClick={reload}
    >
    otro
    </button >
  );
}

export default Button