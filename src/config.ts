export const version = import.meta.env.SNOWPACK_PUBLIC_VERSOIN || "unset_version";
export const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const title =
  import.meta.env.SNOWPACK_PUBLIC_TITLE || "Bootstrap Components";
export const basename = import.meta.env.SNOWPACK_PUBLIC_URL;

const ghUrl = "https://github.com/nexys-system/react-bootstrap-components";

export const github = { sha: `${ghUrl}/commit/${sha}`, url: ghUrl };
