import { isConformant } from 'test/specs/commonTests';

import Grid from 'src/components/Grid/Grid';

describe('Grid', () => {
  isConformant(Grid, { constructorName: 'Grid' });
});
