import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M15 28.846a13.78 13.78 0 0 1-9.238-3.552c1.353-3.218 4.496-4.96 9.224-4.96 4.734 0 7.884 1.826 9.245 5.05-2.45 2.196-5.683 3.462-9.231 3.462Zm.167-21.18c2.956 0 5.166 2.287 5.166 5.327 0 3.126-2.325 5.674-5.166 5.674-2.842 0-5.167-2.548-5.167-5.674 0-3.04 2.21-5.327 5.167-5.327M15 0C6.716 0 0 6.716 0 15c0 .549.034 1.09.091 1.623.02.177.055.349.08.524.051.353.104.705.179 1.05.044.203.101.4.153.599.081.309.164.616.264.917.068.205.146.405.222.606.108.286.221.567.346.844a14.658 14.658 0 0 0 .712 1.376c.109.187.219.37.336.553.163.253.336.499.513.742.124.17.246.34.378.504.195.245.402.478.612.71.132.146.259.296.397.436.243.25.5.481.759.712.104.092.197.195.304.285l.002-.007A14.932 14.932 0 0 0 15 30a14.929 14.929 0 0 0 9.641-3.517l.002.006c.103-.086.195-.185.294-.274.265-.236.528-.473.776-.726.137-.139.262-.287.393-.432.211-.233.42-.468.617-.714.13-.164.252-.334.376-.503.178-.243.352-.49.515-.744.395-.618.745-1.263 1.05-1.93.124-.276.238-.558.347-.843.076-.202.153-.402.221-.608.1-.3.183-.608.264-.918.052-.199.11-.395.154-.597.075-.346.128-.699.179-1.053.025-.175.06-.346.08-.523C29.966 16.09 30 15.55 30 15c0-8.284-6.716-15-15-15Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;