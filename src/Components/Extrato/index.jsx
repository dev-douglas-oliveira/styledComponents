import React from "react";
import { Botao, Box } from "../UI";
import { extratoLista } from "../../info.js";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <div key={id}>
            <div>{type}</div>
            <div>{value}</div>
            <div>{date}</div>
            <div>{from}</div>
          </div>
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};
