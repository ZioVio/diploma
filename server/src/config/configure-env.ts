import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

const dotEnvPath = path.join(__dirname, '../../', '.env');
const dotEnvExamplePath = `${dotEnvPath}.example`;

if (fs.existsSync(dotEnvPath)) {
  dotenv.config({ path: dotEnvPath });
} else {
  dotenv.config({ path: dotEnvExamplePath });
}
