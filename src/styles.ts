import { css } from 'lit';

export const style = css`
.card-margin-top {
  margin-top: 32px;
}
.attributes {
  display: flex;
  white-space: nowrap;
  padding: 8px;
}
.attributes.width-100 {
  padding: 2px;
}
.attribute ha-icon {
  margin-right: 10px;
  margin-left: 5px;
}
.attribute {
  white-space: nowrap;
  display: flex;  
  align-items: center;
  width: 50%;
}
#battery {
  float: right;
  margin-right: 16px;
  margin-top: -15px;
}
.header {
  padding-top: 8px;
  height: 100px;
  position: relative;
}
.header-compact {
  padding-top: 4px;
  height: 55px;
}
.attribute .header, .attribute .header-compact {
  height: auto;
  padding-top: 0px;
}
.header > img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: -16px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header-compact > img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 4px;
  margin-top: 0px;
  float: left;
  box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
}
.header > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 16px;
  text-transform: capitalize;
  display: block;
  margin-left: 132px;
}
.header-compact > #name {
  font-weight: bold;
  width: 100%;
  margin-top: 8px;
  text-transform: capitalize;
  display: block;
  white-space: nowrap;
}
#name ha-icon {
    color: rgb(240, 163, 163);
}
.header > #species {
  text-transform: capitalize;
  color: #8c96a5;
  display: block;
  margin-top: 4px;
  margin-left: 132px;
}
.header > #status-container {
  display: flex;
  gap: 16px;
  margin-left: 132px;
  margin-top: 4px;
}
.header > #status-container span {
  color: #8c96a5;
  display: flex;
  align-items: center;
}
.header > #metrics-container {
  position: absolute;
  top: 28px;
  right: 16px;
  text-align: right;
  color: #8c96a5;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.header > #metrics-container ha-icon,
.header > #status-container ha-icon {
  margin-right: 4px;
  --mdc-icon-size: 16px;
}
.header-compact > #species {
  text-transform: capitalize;
  line-height: 85%;
  color: #8c96a5;
  font-size: 0.8em;
  margin-top: 0px;
  margin-right: 4px;
  opacity: 0.4;
  display: block;
}
.meter {
  height: 8px;
  background-color: var(--primary-background-color);
  border-radius: 2px;
  display: inline-grid;
  overflow: hidden;
}
.meter.red {
  flex-grow: 1;
  margin-right: 5px;
  max-width: 5%
}
.meter.green {
  flex-grow: 10;
  margin-right: 5px;
  max-width: 40%
}
.attribute.tooltip.width-100 .meter.green {
  max-width: 90%;
}
.attribute.tooltip.width-100 .header {
  display: none;
}
.meter > span {
  grid-row: 1;
  grid-column: 1;
  height: 100%;
}
.meter > .good {
  background-color: rgba(43,194,83,1);
}
.meter > .bad {
  background-color: rgba(240,163,163);
}
.meter > .unavailable {
  background-color: rgba(158,158,158,1);
}
.divider {
  height: 1px;
  background-color: #727272;
  opacity: 0.25;
  margin-left: 8px;
  margin-right: 8px;
}
.tooltip {
  position: relative;
}
.tooltip .tip {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  padding: 6px 10px;
  top: 3.3em;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-180%);
          transform: translateX(-50%) translateY(-180%);
  background: grey;
  color: white;
  white-space: nowrap;
  z-index: 2;
  border-radius: 2px;
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), -webkit-transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
}
.battery.tooltip .tip {
  top: 2em;
}
.tooltip:hover .tip, .tooltip:active .tip {
  display: block;
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateX(-50%) translateY(-200%);
          transform: translateX(-50%) translateY(-200%);
}
.width-100 {
  width: 100%;    
  margin-bottom: 3px;
  margin-right: 5px;
}
.width-100 .header {
  display: none;
}
@media (max-width: 600px) {
  .header > .unit {
    display: none;
  }
}
.table-container {
  overflow-x: auto;
  margin: 0 16px;
  padding: 16px 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  color: var(--primary-text-color);
  table-layout: auto;
}
th {
  padding: 12px 16px;
  text-align: left;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 1px solid var(--divider-color);
  user-select: none;
}
th:hover {
  background-color: var(--secondary-background-color);
}
td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--divider-color);
  white-space: nowrap;
  width: fit-content;
}
td[data-column="website"] {
  width: 1%;
  white-space: nowrap;
}
tr:hover {
  background-color: var(--secondary-background-color);
  cursor: pointer;
}
.plant-name {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 100%;
}
.plant-name img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
ha-icon {
  --mdc-icon-size: 18px;
  margin-left: 4px;
}
.card-header {
  padding: 16px;
  border-bottom: 1px solid var(--divider-color);
}
.card-header .name {
  font-size: 16px;
  font-weight: bold;
}
td, th {
  padding: 12px 16px;
  border-bottom: 1px solid var(--divider-color);
  white-space: nowrap;
  width: fit-content;
}
td[data-column="friendly_name"],
th[data-column="friendly_name"] {
  max-width: 200px;
  width: fit-content;
}
td[data-column="strain"],
th[data-column="strain"],
td[data-column="breeder"],
th[data-column="breeder"],
td[data-column="notes"],
th[data-column="notes"] {
  max-width: 150px;
  width: fit-content;
}
td {
  overflow: hidden;
  text-overflow: ellipsis;
}
`;
