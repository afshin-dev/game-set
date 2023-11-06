import type Platform from "./platform.schema";

type Requirements = {
  minimum: string;
  recommended: string;
};
type Platforms = {
  platform: Platform;
  released_at?: string;
  requirements: Requirements;
};

export default Platforms;
