import React from 'react';
import { ToolbarProps, View } from 'react-big-calendar';

const CustomToolbar: React.FC<ToolbarProps> = (props) => {
  const { localizer: { messages }, label, view } = props;

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        {view !== 'agenda' && (
          <>
            <button type="button" onClick={() => props.onNavigate('TODAY')}>
              {messages.today}
            </button>
            <button type="button" onClick={() => props.onNavigate('PREV')}>
              {messages.previous}
            </button>
            <button type="button" onClick={() => props.onNavigate('NEXT')}>
              {messages.next}
            </button>
          </>
        )}
      </span>

      <span className="rbc-toolbar-label">{label}</span>

      <span className="rbc-btn-group">
        {['month', 'week', 'day', 'agenda'].map((v) => (
          <button
            type="button"
            key={v}
            onClick={() => props.onView(v as View)}
            className={view === v ? 'rbc-active' : ''}
          >
            {messages[v]}
          </button>
        ))}
      </span>
    </div>
  );
};

export default CustomToolbar;
