import { css } from 'lit';

export default css`
  .tab-panel {
    border: none;
    background-color: #003134;
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius: 8px;
  }
  .tab-buttons {
    height: 30px;
    padding: 10px;
    border-bottom: #338d8f;
    align-items: stretch;
    overflow-y: hidden;
    overflow-x: auto;
    scrollbar-width: thin;
    background-color: var(--primary-color);
    border-radius: 8px 8px 0 0;
  }
  .tab-buttons::-webkit-scrollbar {
    height: 1px;
    background-color: var(--border-color);
  }
  .tab-btn {
    border: none;
    border-bottom: 3px solid transparent;
    color: #fff;
    background-color: transparent;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    font-family: var(--font-regular);
    font-size: var(--font-size-small);
    margin-right: 16px;
    padding: 1px;
  }
  .tab-btn.active {
    border-bottom: 3px solid #338d8f;
    font-weight: bold;
    color: #efefef;
  }

  .tab-btn:hover {
    color: #54a0a1;
  }
  .tab-content {
    margin: -1px 0 0 0;
    position: relative;
    min-height: 50px;
    padding: 20px;
  }
`;
