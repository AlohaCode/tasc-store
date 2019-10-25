import * as express from 'express';
import { Application } from 'express';
import { getAllBaskets } from './get-baskets.route';
import { postReceipt } from './post-receipt.route';

const cors = require('cors');
const bodyParser = require('body-parser');
const app: Application = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.route('/api/baskets').get(getAllBaskets);
app.route('/api/receipt').post(postReceipt);

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running on http://localhost:' + httpServer.address().port);
});
