import p01 from "./imgs/p01.webp";

const Inicio = () => {
  return (
    <div id="inicio" className="text-white">
      <div className="flex flex-col justify-center w-full mx-auto max-w-35">
        <h2 className="mx-auto mb-3 font-sans font-bold text-xl text-orange-600">
          Evento de Harley-Davidson en Cuba
        </h2>
        <div className="flex flex-row justify-center mx-5 my-3">
          <img className="rounded-lg max w-32 h-auto" src={p01} alt="" />

          <p className="mx-5 justify-center font-semibold">
            El encuentro de harlistas cubanos se realiza cada 2do fin de semana
            de febrero en el balneario de Varadero.
          </p>
        </div>

        <div className="my-3">
          <p className="flex text-center p-3 mx-4 font-sans text-lg font-semibold">
            Cuba a pesar de ser una isla, la mayor del mar de las Antillas y
            separada de los grandes continentes tampoco ha quedado exenta de ser
            parte de la historia de la Harley-Davidson, la afamada y lujosa
            motocicleta que nació un día allá por el año de 1903 en Milwaukee,
            Ciudad de Norteamérica, y que es actualmente la motocicleta más
            reconocida a nivel mundial. La carencia de partes y piezas para
            estas motocicletas provocadas por el embargo comercial al que ha
            estado sometido el país por más de 50 años ha hecho que la historia
            de los “Harlistas Cubanos” sea tan apasionante y mística como lo es
            la misma historia de la Harley-Davidson. Con estas paginas queremos
            dejar plasmada la semblanza de algunos de los más emblemáticos
            personajes contemporáneos a nuestra época y que han traspasado la
            frontera del solo hecho de poseer una de estas motocicletas, para
            convertirse a sí mismos en lo que son hoy los “Harlistas Cubanos”. A
            todos ellos, sus familiares y amigos va dedicada esta obra.
          </p>
        </div>
        <img
          className="flex max-w-2xl m-auto h-auto my-5 rounded-md"
          src="https://www.excelenciasdelmotor.com/sites/default/files/2019-02/portada_24.jpg"
          alt="foto excelencias del motor"
        />
      </div>
    </div>
  );
};

export default Inicio;
