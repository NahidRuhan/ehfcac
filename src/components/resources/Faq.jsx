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
                Do I have to be a student of Canadian University Of Bangladesh to get into courses?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No you don&apos;t have to. Anybody Can enroll in these courses.
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
                Are there any other requirements I have to fullfil to enroll myself into these courses?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No. These are some beginner friendly courses you can enroll yourself into. All you need is some motivation and effort and all needed from you. Rest we will see for ourself.
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
