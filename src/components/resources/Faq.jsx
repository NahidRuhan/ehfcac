import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center lg:text-left">FAQ</h1>

      <div>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="font-bold">
                Please insert your question here?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the answer of the question.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="font-bold">
                Please insert your question here?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the answer of the question.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="font-bold">
                Please insert your question here?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the answer of the question.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="font-bold">
                Please insert your question here?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the answer of the question.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="font-bold">
                Please insert your question here?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the answer of the question.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p className="font-bold">
                Please insert your question here?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is the answer of the question.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
};

export default Faq;
