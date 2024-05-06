import React, { useEffect, useState } from "react";
import { getAllPaisTotal, putStatePais } from "../../../api_server/paisApi";
import css from "./layout.module.css";

export default function LayoutAdmin() {
  const [paisData, setPaisData] = useState([]);

  const getPais = async () => {
    const DATA = await getAllPaisTotal();
    console.log(DATA.data);
    setPaisData(DATA.data);
  };

  const chagueState = async (id, estado) => {
    console.log(estado);
    console.log(id);

    const data = {
      estado
    }

    const kalen = await putStatePais(id, data);
    console.log(kalen);
    getPais()
  };

  useEffect(() => {
    getPais();
  }, []);

  return (
    <div className={css.layout}>
      <article className={css.div_lista_pais}>
        <h5>Lista de paises</h5>
        <ul className={css.ul_lista}>
          {paisData.map((e, index) => {
            return (
              <li key={index} className={css.div_item}>
                <span> {index + 1}</span>
                <span> {e.desc_corta_v}</span>
                <span className={css.text_item}> {e.desc_larga_v}</span>
                <button
                  className={`${e.estado_b ? css.btn_true : css.btn_false}`}
                  onClick={() => chagueState(e.id_pais_i, !e.estado_b)}
                >
                  {e.estado_b ? "Activo" : "Bloqueado"}
                </button>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
}
