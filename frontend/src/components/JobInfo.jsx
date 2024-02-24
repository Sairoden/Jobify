// STYLES
import styled from "styled-components";

function JobInfo({ icon, text }) {
  return (
    <div>
      <span className="job-icon">{icon}</span>
      <span className="job-text">{text}</span>
    </div>
  );
}

export default JobInfo;
