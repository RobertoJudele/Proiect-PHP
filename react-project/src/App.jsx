import { useState } from "react";

import umlDiagram from "./assets/uml.png";
import bdDiagram from "./assets/bd.png";

import "./App.css";
import TestBackend from "./components/TestBackend";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <section className="flex flex-col w-[80vw]">
          {" "}
          <div className="text-4xl pb-[10vh] text-center">HealthHub</div>
          <div className="pb-[5vh] text-xl ">
            Scopul acestei aplicatii este de a facilita accesarea de catre
            pacienti a informatiilor analizelor lor si de a ajuta spitalul sa
            isi gestioneze rapid si eficient pacientii
          </div>
          <div className="pl-[10vw]">
            <div className="text-xl">
              <strong>a. Roluri</strong>
            </div>
            <ul className="list-disc list-inside pl-4 pb-8">
              <li>
                <strong>Administrator:</strong> Creează conturi pentru medici,
                recepționeri și gestionează infrastructura aplicației.
              </li>
              <li>
                <strong>Medic:</strong> Consultă pacienții și actualizează
                diagnosticele.
              </li>
              <li>
                <strong>Asistent medical:</strong> Monitorizează tratamentele și
                pregătește medicamentele.
              </li>
              <li>
                <strong>Recepționer:</strong> Gestionează programările
                pacienților.
              </li>
            </ul>

            <div className="text-xl">
              {" "}
              <strong>b. Entități</strong>
            </div>
            <ul className="list-disc list-inside pl-4 pb-8">
              {" "}
              <li>
                <strong>Pacient:</strong> Include informații despre identitate,
                diagnostic și planul de tratament.
              </li>
              <li>
                <strong>Personal medical:</strong> Medici și asistente, fiecare
                cu specializare și program.
              </li>
              <li>
                <strong>Programare:</strong> Include data, ora, medicul și
                informațiile pacientului.
              </li>
              <li>
                <strong>Salon:</strong> Evidența saloanelor, număr de paturi și
                pacienți internați.
              </li>
              <li>
                <strong>Medicamente:</strong> Include stocuri, prescrieri și
                administrare.
              </li>
            </ul>

            <div className="text-xl">
              {" "}
              <strong>c. Procese principale</strong>
            </div>
            <ul className="list-disc list-inside pl-4 pb-8">
              {" "}
              <li>
                <strong>Programare consultație:</strong>
                <ul className="list-disc list-inside pl-16">
                  <li>
                    Recepționerul adaugă o programare în funcție de
                    disponibilitatea medicului.
                  </li>
                  <li>Pacientul este notificat prin email/SMS.</li>
                </ul>
              </li>
              <li>
                <strong>Monitorizarea tratamentului:</strong>
                <ul className="list-disc list-inside pl-16">
                  <li>Medicii prescriu tratamente.</li>
                  <li>
                    Asistentele actualizează starea pacientului și medicamentele
                    administrate.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Gestionarea saloanelor:</strong>
                <ul className="list-disc list-inside pl-16">
                  <li>
                    Se verifică disponibilitatea paturilor pentru noi pacienți.
                  </li>
                  <li>Sistemul alocă automat un pat liber.</li>
                </ul>
              </li>
            </ul>

            <div className="text-xl">
              {" "}
              <strong>d. Componente principale</strong>
            </div>
            <ul className="list-disc list-inside pl-4 pb-8">
              <li>
                <strong>Frontend:</strong> Realizat cu React.js pentru o
                interfață clară și rapidă.
              </li>
              <li>
                <strong>Backend:</strong> Php pentru procesarea logicii.
              </li>
              <li>
                <strong>Baza de date:</strong> MySQL pentru relaționarea
                entităților.
              </li>
              <li>
                <strong>API REST:</strong> Comunicare între frontend și backend.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl">
              Mai jos sunt prezentate cateva diagrame cu posibile scenarii de
              folosire:
            </p>
            <img className="w-[60vw] pb-8" src={umlDiagram}></img>
            <p className="text-xl">
              Iar urmatoarea este diagrama actuala a bazei de date (probabil v-a
              fi modificata pentru cerintele urmatoare)
            </p>
            <img className="w-[60vw]" src={bdDiagram}></img>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
