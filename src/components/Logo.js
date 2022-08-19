import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="231.028" height="51.868" viewBox="0 0 231.028 51.868">
        <g id="Grupo_1085" data-name="Grupo 1085" transform="translate(197.964 0)">
          <g id="Grupo_1084" data-name="Grupo 1084">
            <g id="Grupo_1083" data-name="Grupo 1083">
              <path
                id="Caminho_744"
                data-name="Caminho 744"
                d="M1118.012,308.406a6.9,6.9,0,0,1,6.847-2.605c1-.821,2.176-1.759,3.62-2.9.1-.077.195-.156.293-.234l-.007,0a10.875,10.875,0,0,0-12.6,2.038c-.127.143-.257.285-.379.435-.141.167-.293.346-.45.511.171.2,1.225,1.4,2.628,2.813C1117.983,308.443,1118,308.423,1118.012,308.406Z"
                transform="translate(-1103.596 -282.449)"
                fill="#1074ab"
              />
              <path
                id="Caminho_745"
                data-name="Caminho 745"
                d="M1076.96,258.413c-.022.023.014-.016,0,.008-3.674-4.586-7.69-12.055-1.705-18.562a30.161,30.161,0,0,0-9.43,15.689c-2.7,12.775,3.915,20.131,9.778,23.733C1069.682,274.351,1071.4,265.155,1076.96,258.413Z"
                transform="translate(-1065.199 -235.224)"
                fill="#8dc63f"
              />
              <path
                id="Caminho_746"
                data-name="Caminho 746"
                d="M1099.816,245.85l-.054.063c.019-.025.036-.048.057-.071,5.938-7.021,16.437-15.091,13.21-19.708-2.067-2.948-6.663-3.093-9.375-2.233-.1.041-.205.083-.307.13a20.569,20.569,0,0,0-5.236,3.257C1092.126,233.795,1096.142,241.264,1099.816,245.85Z"
                transform="translate(-1088.058 -222.653)"
                fill="#d7df23"
              />
              <path
                id="Caminho_747"
                data-name="Caminho 747"
                d="M1134.142,306.384c-.1.079-.194.157-.293.234-1.445,1.14-2.624,2.078-3.62,2.9,13.036,2.509,11.433,22.227-2.928,22.9a14.19,14.19,0,0,1-4.947-.7c.167.065.412.151.559.2,8.663,2.893,16.561-1.478,18.539-8.875C1143.305,316.109,1140.656,309.415,1134.142,306.384Z"
                transform="translate(-1108.965 -286.166)"
                fill="#f15a22"
              />
              <path
                id="Caminho_748"
                data-name="Caminho 748"
                d="M1121.9,221.32c2.711-.86,7.307-.715,9.375,2.233,3.085,4.408-6.371,11.976-12.4,18.773a10.871,10.871,0,0,1,12.593-2.038l.01,0C1148.719,226.528,1133.556,216.437,1121.9,221.32Z"
                transform="translate(-1106.307 -220.072)"
                fill="#3c9cd7"
              />
              <path
                id="Caminho_749"
                data-name="Caminho 749"
                d="M1098.858,319.074v0l.007-.008Zm.034,10.7-.014-.02c-2.319-4.114-1.912-7.926.009-10.652l.053.061a.635.635,0,0,0-.075-.084l0,0h0a.011.011,0,0,0,0-.008h0l0,0,0,0c-5.546,6.734-7.267,15.913-1.367,20.847.081.051.164.106.245.161a17.808,17.808,0,0,0,2.316,1.172l0,0C1095.22,339.281,1096.681,333.647,1098.892,329.769Z"
                transform="translate(-1087.104 -295.88)"
                fill="#3c9cd7"
              />
              <path
                id="Caminho_750"
                data-name="Caminho 750"
                d="M1126.537,353.535a7.457,7.457,0,0,0,.333-2.258c.053.708-.607,3.812-3.317,4.638a5.33,5.33,0,0,1-6.5-3.9c-.573.89-1.152,1.781-1.529,2.416C1118.343,358.24,1124.7,358.848,1126.537,353.535Z"
                transform="translate(-1103.734 -320.543)"
                fill="#f15a22"
              />
              <path
                id="Caminho_751"
                data-name="Caminho 751"
                d="M1111.807,327.474a6.382,6.382,0,0,1,1.059-5.464c-1.354-1.361-2.368-2.526-2.592-2.787-1.919,2.724-2.327,6.536-.01,10.639l.016.025c.377-.634.956-1.523,1.527-2.413Z"
                transform="translate(-1098.492 -295.998)"
                fill="#1074ab"
              />
              <path
                id="Caminho_752"
                data-name="Caminho 752"
                d="M1119.522,320.069c-.094-.023-.19-.051-.287-.079-.073-.018-.148-.041-.225-.059s-.169-.044-.249-.062c-.166-.036-.331-.075-.5-.106l-.069.026a56.258,56.258,0,0,0-4.376,3.98,3.9,3.9,0,0,1,5.848,1.191c.032.056.06.115.086.169.016.035.037.066.051.1.036.08.065.16.1.241a4.015,4.015,0,0,1,.238,1.623c0,.063,0,.129,0,.194a7.7,7.7,0,0,1-.333,2.117c-1.839,5.313-8.195,4.7-11.015.9-2.211,3.878-3.672,9.511,1.17,11.494.1.044.266.1.472.177a14.235,14.235,0,0,0,4.905.692C1129.213,342.013,1131.174,323.576,1119.522,320.069Z"
                transform="translate(-1096.996 -296.411)"
                fill="#f58220"
              />
              <path
                id="Caminho_753"
                data-name="Caminho 753"
                d="M1129.017,323.319a53.924,53.924,0,0,1,4.433-3.995,6.9,6.9,0,0,0-6.847,2.605c-.012.016-.029.037-.043.055.586.59,1.239,1.219,1.924,1.834A4.178,4.178,0,0,1,1129.017,323.319Z"
                transform="translate(-1112.187 -295.973)"
                fill="#f15a22"
              />
              <path
                id="Caminho_754"
                data-name="Caminho 754"
                d="M1124.353,332.9c-.7-.618-1.354-1.255-1.942-1.85l.009.013a6.334,6.334,0,0,0-1.056,5.466,34.8,34.8,0,0,1,2.791-3.387A2.07,2.07,0,0,1,1124.353,332.9Z"
                transform="translate(-1108.05 -305.057)"
                fill="#f15a22"
              />
              <path
                id="Caminho_755"
                data-name="Caminho 755"
                d="M1131.858,342.3a3.985,3.985,0,0,1-.127,1.038h0v.008a3.9,3.9,0,0,1-4.778,2.761h-.007a3.914,3.914,0,0,1-2.768-4.787,3.844,3.844,0,0,1,.642-1.323,35.093,35.093,0,0,0-2.787,3.385v0l0,0,0,0,0,0a5.33,5.33,0,0,0,6.5,3.9c2.57-.784,3.292-3.607,3.317-4.5a5.041,5.041,0,0,1-.043.71A5.212,5.212,0,0,0,1131.858,342.3Z"
                transform="translate(-1108.713 -311.906)"
                fill="#f58220"
              />
            </g>
          </g>
        </g>
        <g id="Grupo_1086" className="svg-cinza" data-name="Grupo 1086" transform="translate(0 24.398)">
          <path
            id="Caminho_756"
            data-name="Caminho 756"
            d="M220.072,340.952v-2.47c0-5.953,3.333-9.048,8.959-9.048a8.067,8.067,0,0,1,5.8,2.322.523.523,0,0,1,.179.387.639.639,0,0,1-.179.387l-1.012,1.19a.509.509,0,0,1-.387.208.572.572,0,0,1-.357-.119,6.348,6.348,0,0,0-4.2-1.578c-3.393,0-5.149,1.756-5.149,5.715v3.482c0,3.839,1.756,5.715,4.732,5.715,2.56,0,4.137-1.012,4.137-3.691v-1.786h-3.274a.517.517,0,0,1-.565-.565v-1.637a.517.517,0,0,1,.565-.565h6.221a.517.517,0,0,1,.565.565v3.571c0,4.464-3.125,6.9-7.679,6.9C223.167,349.94,220.072,346.875,220.072,340.952Z"
            transform="translate(-220.072 -328.214)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_757"
            data-name="Caminho 757"
            d="M300.246,364.578V351.542a.56.56,0,0,1,.327-.565,13.678,13.678,0,0,1,5.893-1.339,14.243,14.243,0,0,1,1.577.06.5.5,0,0,1,.417.536v1.607c0,.3-.179.417-.506.417h-1.1a8.423,8.423,0,0,0-3.006.446v11.875a.438.438,0,0,1-.476.476h-2.649A.438.438,0,0,1,300.246,364.578Z"
            transform="translate(-281.466 -343.685)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_758"
            data-name="Caminho 758"
            d="M343.954,359.761v-8.631a.438.438,0,0,1,.476-.476h2.649a.438.438,0,0,1,.476.476v8.691c0,2.976,1.1,3.72,3.125,3.72a14.161,14.161,0,0,0,3.036-.268V351.129a.438.438,0,0,1,.476-.476h2.649a.438.438,0,0,1,.476.476v13.393a.521.521,0,0,1-.357.536,20.71,20.71,0,0,1-6.518,1.131C346.008,366.189,343.954,363.927,343.954,359.761Z"
            transform="translate(-314.936 -344.463)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_759"
            data-name="Caminho 759"
            d="M428.027,356v2.054c0,4.553-2.768,6.875-7.083,6.875a9.3,9.3,0,0,1-3.125-.506v5.863a.438.438,0,0,1-.476.476h-2.649a.438.438,0,0,1-.476-.476V351a.521.521,0,0,1,.357-.536,16.048,16.048,0,0,1,6.072-1.339C425.5,349.128,428.027,351.539,428.027,356Zm-3.6.119c0-3.125-1.012-4.4-3.6-4.4a9.6,9.6,0,0,0-3.006.476v9.732a8.4,8.4,0,0,0,2.917.416c2.828,0,3.69-1.4,3.69-4.494Z"
            transform="translate(-368.74 -343.295)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_760"
            data-name="Caminho 760"
            d="M482.319,358.027v-1.9c0-4.643,2.857-6.994,7.054-6.994,4.256,0,7.054,2.351,7.054,6.994v1.9c0,4.643-2.857,6.994-7.054,6.994C485.117,365.021,482.319,362.67,482.319,358.027Zm10.506-.119v-1.667c0-3.244-.982-4.554-3.452-4.554s-3.452,1.369-3.452,4.554v1.667c0,3.244.982,4.554,3.452,4.554S492.825,361.093,492.825,357.908Z"
            transform="translate(-420.89 -343.295)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_761"
            data-name="Caminho 761"
            d="M555.472,349.375a.527.527,0,0,1-.476-.565V330.476a.51.51,0,0,1,.476-.565,36.018,36.018,0,0,1,6.131-.476c4.554,0,7.5,2.113,7.5,5.149v.506a4.4,4.4,0,0,1-2.262,3.75,5.336,5.336,0,0,1,3.215,4.7v.565c0,3.571-2.917,5.833-8.125,5.833A33.229,33.229,0,0,1,555.472,349.375Zm6.965-11.31c2.054,0,3.3-1.042,3.3-2.768v-.357c0-1.7-1.458-2.709-3.839-2.709a30.479,30.479,0,0,0-3.542.179v5.655Zm4.077,5.923v-.357c0-1.816-1.4-2.917-3.631-2.917h-4.524v6.25a35.283,35.283,0,0,0,3.988.179C565.056,347.143,566.514,346.071,566.514,343.988Z"
            transform="translate(-476.543 -328.214)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_762"
            data-name="Caminho 762"
            d="M628.434,358.027v-1.9c0-4.643,2.857-6.994,7.054-6.994,4.256,0,7.054,2.351,7.054,6.994v1.9c0,4.643-2.857,6.994-7.054,6.994C631.232,365.021,628.434,362.67,628.434,358.027Zm10.506-.119v-1.667c0-3.244-.982-4.554-3.453-4.554s-3.452,1.369-3.452,4.554v1.667c0,3.244.982,4.554,3.452,4.554S638.94,361.093,638.94,357.908Z"
            transform="translate(-532.779 -343.295)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_763"
            data-name="Caminho 763"
            d="M707.433,349.716v1.578a.573.573,0,0,1-.417.6,8.919,8.919,0,0,1-2.56.387c-3.631,0-5.506-1.935-5.506-5.655V333.644a.47.47,0,0,1,.446-.506l2.411-.565a3.593,3.593,0,0,1,.417-.089c.208,0,.327.179.327.417v3.839h4.316a.438.438,0,0,1,.476.476v1.7a.438.438,0,0,1-.476.476h-4.316V346.5c0,2.53.8,3.125,2.59,3.125a6.176,6.176,0,0,0,1.7-.208,1.309,1.309,0,0,1,.3-.06C707.314,349.359,707.433,349.478,707.433,349.716Z"
            transform="translate(-586.778 -330.549)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_764"
            data-name="Caminho 764"
            d="M744.437,326.868v-.387a1.809,1.809,0,0,1,2.024-1.875,1.785,1.785,0,0,1,1.994,1.875v.387a1.785,1.785,0,0,1-1.994,1.875A1.809,1.809,0,0,1,744.437,326.868Zm.208,18.542V331.184a.438.438,0,0,1,.476-.476h2.649a.438.438,0,0,1,.476.476V345.41a.438.438,0,0,1-.476.476h-2.649A.438.438,0,0,1,744.645,345.41Z"
            transform="translate(-621.609 -324.517)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_765"
            data-name="Caminho 765"
            d="M772.134,357.67v-1.25c0-4.911,2.887-7.292,7.292-7.292a6.573,6.573,0,0,1,4.107,1.458.557.557,0,0,1,.238.417.71.71,0,0,1-.179.417l-.863,1.071c-.149.178-.268.268-.417.268a.627.627,0,0,1-.328-.149,4.577,4.577,0,0,0-2.619-.863c-2.857,0-3.631,1.7-3.631,4.881v.893c0,3.155.893,4.881,3.6,4.881a5.459,5.459,0,0,0,3.065-1.012.48.48,0,0,1,.268-.089c.119,0,.208.089.357.3l.863,1.19a.569.569,0,0,1,.149.357.454.454,0,0,1-.208.357,8.071,8.071,0,0,1-4.524,1.518C774.694,365.021,772.134,362.7,772.134,357.67Z"
            transform="translate(-642.818 -343.295)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_766"
            data-name="Caminho 766"
            d="M840.81,336.638v7.53a.752.752,0,0,1-.476.744,14.711,14.711,0,0,1-5.744,1.042c-3.839,0-6.042-1.518-6.042-4.4v-.625c0-2.738,2.143-4.167,6.042-4.167h2.857v-.417c0-2.47-.8-3.631-3.125-3.631a6.588,6.588,0,0,0-3.363.952.663.663,0,0,1-.3.089.566.566,0,0,1-.446-.238l-.833-1.131a.581.581,0,0,1-.149-.387.434.434,0,0,1,.208-.387,8.856,8.856,0,0,1,4.941-1.548C838.637,330.06,840.81,332.173,840.81,336.638Zm-9.316-8.691v-1.1a.63.63,0,0,1,.506-.6l6.4-1.994c.268-.089.476.03.476.327v1.994a.644.644,0,0,1-.446.655L832,328.393C831.673,328.453,831.495,328.274,831.495,327.947Zm5.953,15.09v-4.048H834.59c-1.994,0-2.8.714-2.8,1.964v.476c0,1.1.8,1.994,2.8,1.994A6.635,6.635,0,0,0,837.447,343.037Z"
            transform="translate(-686.018 -324.227)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_767"
            data-name="Caminho 767"
            d="M893.855,364.578V351.542a.56.56,0,0,1,.327-.565,13.678,13.678,0,0,1,5.893-1.339,14.243,14.243,0,0,1,1.577.06.5.5,0,0,1,.417.536v1.607c0,.3-.179.417-.506.417h-1.1a8.425,8.425,0,0,0-3.006.446v11.875a.438.438,0,0,1-.476.476h-2.649A.438.438,0,0,1,893.855,364.578Z"
            transform="translate(-736.027 -343.685)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_768"
            data-name="Caminho 768"
            d="M937.182,326.868v-.387a1.809,1.809,0,0,1,2.024-1.875,1.785,1.785,0,0,1,1.994,1.875v.387a1.785,1.785,0,0,1-1.994,1.875A1.809,1.809,0,0,1,937.182,326.868Zm.208,18.542V331.184a.438.438,0,0,1,.476-.476h2.649a.438.438,0,0,1,.476.476V345.41a.438.438,0,0,1-.476.476h-2.649A.438.438,0,0,1,937.39,345.41Z"
            transform="translate(-769.205 -324.517)"
            fill="#6e6e6e"
          />
          <path
            id="Caminho_769"
            data-name="Caminho 769"
            d="M964.879,358.027v-1.9c0-4.643,2.857-6.994,7.054-6.994,4.256,0,7.054,2.351,7.054,6.994v1.9c0,4.643-2.857,6.994-7.054,6.994C967.677,365.021,964.879,362.67,964.879,358.027Zm10.506-.119v-1.667c0-3.244-.982-4.554-3.452-4.554s-3.453,1.369-3.453,4.554v1.667c0,3.244.982,4.554,3.453,4.554S975.385,361.093,975.385,357.908Z"
            transform="translate(-790.414 -343.295)"
            fill="#6e6e6e"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}