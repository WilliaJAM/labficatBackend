const express = require("express");
const morgan = require("morgan");
const cors = require("cors")

//Configuración inicial
const app = express();
app.set("port", 3000);
app.listen(app.get("port"));

//Middelware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Rutas
const user = require("./db/routes/users");
app.use("/api/v1/user", user);

const customer = require("./db/routes/customers");
app.use("/api/v1/customers", customer);

const institutionalEmail = require("./db/routes/institutional_email");
app.use("/api/v1/insemail", institutionalEmail);

const stateAccount = require("./db/routes/account_states");
app.use("/api/v1/state", stateAccount);

const rol = require("./db/routes/roles");
app.use("/api/v1/rol", rol);

const validation = require("./db/routes/validations");
app.use("/api/v1/validation", validation);

const requestState = require("./db/routes/request-estates");
app.use("/api/v1/requestState", requestState);

const message = require("./db/routes/messages");
app.use("/api/v1/message", message);

const monitoring = require("./db/routes/monitoring");
app.use("/api/v1/monitoring", monitoring);

const request = require("./db/routes/requests");
app.use("/api/v1/request", request);

const aplicationMethod = require("./db/routes/application_methods");
app.use("/api/v1/aplicationMethod", aplicationMethod);

const documentType = require("./db/routes/document_types");
app.use("/api/v1/documentType", documentType);

const technicalValidation = require("./db/routes/technical_feasibility");
app.use("/api/v1/technicalValidation", technicalValidation);

const sendEmail = require("./db/routes/send_emails");
app.use("/api/v1/sendEmail", sendEmail);

const concatDetail = require("./db/routes/contact_details");
app.use("/api/v1/concatDetail", concatDetail);

const activityLog = require("./db/routes/activity_logs");
app.use("/api/v1/activityLog", activityLog);

const acceptanceRate = require("./db/routes/acceptance_rates");
app.use("/api/v1/acceptanceRate", acceptanceRate);  