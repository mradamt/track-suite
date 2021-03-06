import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = (props: any) => {
  let buttonClass = classNames('button', {
    'button--play':               props.play,
    'button--stop':               props.stop,
    'button--save':               props.save,
    'button--clone':              props.clone,
    'button--delete':             props.delete,
    'button--pause':              props.pause,
    'button--expand':             props.expand,
    'button--shrink':             props.shrink,
    'button--palette':            props.palette,
    'button--calendar':           props.calendar,
    'button--increment':          props.increment,
    'button--decrement':          props.decrement,
    'button--date_range_left':    props.date_range_left,
    'button--date_range_right':   props.date_range_right,
    'button--date_range_reset':   props.date_range_reset,
  });

  let icon = classNames('', {
    'far fa-play-circle':         props.play,
    'far fa-stop-circle':         props.stop,
    'far fa-save':                props.save,
    'far fa-clone':               props.clone,
    'far fa-trash-alt':           props.delete,
    'far fa-pause-circle':        props.pause,
    'fas fa-chevron-circle-down': props.expand,
    'fas fa-chevron-circle-up':   props.shrink,
    'fas fa-palette':             props.palette,
    'far fa-calendar-alt':        props.calendar,
    'fas fa-angle-up':            props.increment,
    'fas fa-angle-down':          props.decrement,
    'fas fa-chevron-left':        props.date_range_left,
    'fas fa-chevron-right':       props.date_range_right,
    // 'fas fa-undo':                props.date_range_reset,
  });  

  return (
    <button type="button" disabled={props.disabled} className={buttonClass} onClick={props.onClick}>
      {props.children}
      <i className={icon}></i>
    </button>
  );
};

export default Button;
