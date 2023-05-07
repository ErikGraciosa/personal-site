import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

function SortableAccordionTable({ data }) {
  const [openRows, setOpenRows] = useState({});

  const handleRowClick = (id) => {
    setOpenRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const sortedData = data.gameList.sort((a, b) => a.title.localeCompare(b.title));

  const checkHeader = document.getElementById("headerData");
  console.log(checkHeader)
  if(checkHeader) {
    checkHeader.style.display = "none";
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="subtitle1" gutterBottom fontSize={32}>GAME LIST GROUND KONTROL MAY2023</Typography>
          </TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map((row) => (
          <React.Fragment key={row.title}>
            <TableRow>
              <TableCell>
              <Typography variant="subtitle1" gutterBottom fontSize={26}>{row.title}</Typography>
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => handleRowClick(row.title)}
                >
                  {openRows[row.title] ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={openRows[row.title]} timeout="auto" unmountOnExit>
                  <Box margin={1}>
                    <Typography variant="subtitle1" gutterBottom fontSize={20} fontWeight="bold">
                      Notes:
                    </Typography>
                    <Typography variant="body2" gutterBottom fontSize={20}>
                      <span>{row.notes}</span>
                    </Typography>
                  </Box>
                  <Box margin={1}>
                    <Typography variant="subtitle1" gutterBottom fontSize={20} fontWeight="bold">
                      Tilt:
                    </Typography>
                    <Typography variant="body2" gutterBottom fontSize={20}>
                      <span>{row.tilt}</span>
                    </Typography>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
}

export default SortableAccordionTable;
