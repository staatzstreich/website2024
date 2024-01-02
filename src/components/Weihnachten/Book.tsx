import React, { FC, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";
import Weihnachten_1 from "../../assets/Weihnachten/Weihnachten_1.png";
import Weihnachten_2 from "../../assets/Weihnachten/Weihnachten_2.png";
import Weihnachten_3 from "../../assets/Weihnachten/Weihnachten_3.png";
import Weihnachten_4 from "../../assets/Weihnachten/Weihnachten_4.png";
import Weihnachten_5 from "../../assets/Weihnachten/Weihnachten_5.png";
import Weihnachten_6 from "../../assets/Weihnachten/Weihnachten_6.png";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Weihnachten = new Map();

Weihnachten.set(1, Weihnachten_1);
Weihnachten.set(3, Weihnachten_2);
Weihnachten.set(5, Weihnachten_3);
Weihnachten.set(7, Weihnachten_4);
Weihnachten.set(9, Weihnachten_5);
Weihnachten.set(10, Weihnachten_6);

interface PageCoverProps {
  children: React.ReactNode;
}
const PageCover = React.forwardRef<HTMLDivElement, PageCoverProps>(
  (props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  }
);
/*
const Page = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div className="page-image">
          <img src={Weihnachten_1_thumb} alt="Weihnachten_1" />
        </div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});
*/
interface PageNoImageProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  number: number;
}
const PageNoImage = React.forwardRef<HTMLDivElement, PageNoImageProps>(
  (props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          {props.header && <h2 className="page-header">{props.header}</h2>}
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  }
);

interface FullPageProps {
  src?: string | undefined;
  alt?: string | undefined;
  number?: number;
}
const FullPage = React.forwardRef<HTMLDivElement, FullPageProps>(
  (props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            src={Weihnachten.get(props.number ?? 1)}
            alt={`Weihnachten_${props.number ?? 1}`}
            style={{
              paddingTop: "10px",
              marginBottom: "10px",
            }}
          />
        </div>
        <div className="page-content">
          <div className="page-footer">{props.number && props.number + 1}</div>
        </div>
      </div>
    );
  }
);

const Book: FC = () => {
  const book = useRef();
  const theme = useTheme();
  //const isMobile = useMediaQuery("(max-width:600px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HTMLFlipBook
      ref={book}
      className={isMobile ? "flip-book-mobile" : "flip-book"}
      autoSize
      showCover={true}
      width={isMobile ? 350 : 700}
      height={isMobile ? 625 : 730}
      size={"stretch"}
      minWidth={350}
      maxWidth={1100}
      minHeight={630}
      maxHeight={750}
      maxShadowOpacity={0.5}
      mobileScrollSupport={true}
      onFlip={() => {}}
      clickEventForward
      disableFlipByClick={false}
      style={{}}
      startPage={0}
      drawShadow={false}
      flippingTime={1000}
      usePortrait={isMobile}
      startZIndex={0}
      useMouseEvents={true}
      swipeDistance={0}
      showPageCorners={true}
    >
      <PageCover>Frohe Weihnachten</PageCover>
      <FullPage number={1} />
      <PageNoImage number={2} header={"Das kleine Geschenk träumt gross"}>
        <p>
          <strong>
            «So pass doch auf. Du hast beinahe meine Goldmasche zerdrückt!»
            schimpft ein zartes Stimmchen. Ein anderes jammert: «Aua! Schubs
            nicht so – mein Glitzerpapier zerknittert sonst!» In der Dunkelheit
            herrscht ein ordentliches Chaos – es raschelt und knistert und
            bimmelt. Alle Geschenke sind aufgeregt und rempeln sich gegenseitig
            im muffigen Sack an. Heute wollen sie sich von ihrer besten Seite
            zeigen. Es ist schliesslich Heiligabend.
          </strong>
        </p>
        <p>
          Vorsichtig zupfe ich mein schmales rotes Band zurecht. Für welche
          Familie ich wohl ausgewählt werde? Unsicher mustere ich meine
          Verpackung. Nur ein einfaches dunkelgrünes Papier und diese rote
          Schleife. Damit werde ich dem Weihnachtsmann ja wohl nicht ins Auge
          fallen. Aber da! Ein Lichtschein fällt auf uns herab und eine, vom
          Alter gezeichnete Hand greift zielsicher in den Sack hinein... Und
          packt ein anderes Geschenk. Ich stosse meinen angehaltenen Atem aus.
          Du kommst auch dran, tröste ich mich. Die Nacht ist noch jung und ganz
          viele Kinder warten auf ihre Geschenke. Mit einem Ruck hebt der
          Schlitten wieder ab und wir sind in der Luft. Aufgeregt wippe ich vor
          und zurück. Werde ich beim nächsten Mal ausgewählt? Ich luge
          vorsichtig umher. Hier und dort sieht man es golden und silbern
          aufglänzen.
        </p>
        <p>
          Die einen Geschenke tragen auch Glocken, die hell bimmeln, andere
          wiederum lustige Kringelschlaufen. Eingeschüchtert schiebe ich mich
          einige Zentimeter zurück. «He! Gib sofort mein Geschenkband frei, du
          Trampeltier. Nur weil du nicht so hinreissend verpackt bist wie ich,
          heisst das nicht, dass du mir meine Schlaufen kaputt machen musst.»
          knurrt plötzlich eine Stimme hinter mir. Erschreckt schaue ich mich
          um. Oh nein. Da bin ich wirklich auf eines anderen Geschenkes Schlaufe
          getreten.
        </p>
      </PageNoImage>
      <FullPage number={3} />
      <PageNoImage number={4}>
        <p>
          «Entschuldigung», wispere ich und schiebe mich wieder an meinen
          ursprünglichen Platz zurück. Gerade öffnet sich der Sack von Neuem.
          Die Hand des Weihnachtsmannes kommt auf mich zu. Vielleicht..? Seine
          Finger streifen mich, verharren jedoch nicht. Hinter mir ergreifen sie
          das Geschenk mit den schönen Schlaufen. Ich seufze. Wie gerne auch ich
          unter einem Weihnachtsbaum liegen würde! Und erst die Freude auf den
          Kindergesichtern sehen, wenn sie mich erblicken. Das muss das beste
          Gefühl auf der ganzen Welt sein. Als wir wieder abheben, beobachte ich
          durch eine lose Masche im Sack das Dorf, welches unter uns immer
          kleiner wird. Die hell erleuchteten Fenster funkeln in der
          Winternacht. Fast scheint es, als zwinkern sie mir zu. Ich fasse
          wieder Hoffnung – bald wird der Weihnachtsmann auch mich bemerken und
          an eine Familie verschenken. Doch fliegen wir weiter durch diese klare
          Nacht, ohne dass mich der Weihnachtsmann auswählt. Warum möchte er
          mich nicht? Hat er mich etwa vergessen? Oder bin ich vielleicht
          einfach nicht hübsch genug? Je leerer der Sack wird, desto kleiner
          fühle ich mich.
        </p>
        <p>
          Alle Geschenke um mich herum werden irgendwann vom Weihnachtsmann
          ausgewählt und herausgehoben. Schliesslich bleibe ich alleine in der
          Finsternis dieses riesigen Sackes zurück. Totenstille herrscht. Zwei
          dicke Tränen kullern mir über meine Wangen und durchnässen das
          dunkelgrüne Geschenkpapier. Es ist mir egal. Ich war wohl wirklich
          nicht eindrucksvoll genug, damit mich der Weihnachtsmann auswählt.
          Traurig ziehe ich mich in hinterste Ecke zurück und vergrabe mich
          unter der Jute. Unerwartet erhellt ein Lichtschein die Dunkelheit. Die
          vertraute Hand tastet verwirrt den leeren Sack ab. Dann ist sie
          schnell wieder weg. Dafür wird nun der Sack weit aufgerissen und ein
          faltiges Gesicht mit freundlichen Augen erscheint in der Öffnung.
          «Nanu, kleines Geschenk? Warum hast du dich so weit hinten
          versteckt?», brummt der Weihnachtsmann. «Willst du nicht zu deinem
          Kind gehen?
        </p>
      </PageNoImage>
      <FullPage number={5} />
      <PageNoImage number={6}>
        <p>
          Sein Weihnachten wird ansonsten ins Wasser fallen.» Ganz sanft hebt
          mich der alte Mann aus dem Sack hervor. Im klaren Licht der Sterne
          mustert er mich. «Ach kleines Geschenk. Ich habe dich nicht vergessen!
          Schliesslich habe ich dich gemacht und weiss um deinen Wert. Du bist
          für jemand ganz Besonderen bestimmt und wirst ihm das beste Geschenk
          sein.» meint der Weihnachtsmann und trocknet vorsichtig meine Tränen
          ab. Ich staune nur. Der Weihnachtsmann klemmt mich behutsam unter
          seinen Arm und klettert aufs Dach eines winzigen Häuschens. Von dort
          geht es weiter zum Schornstein. Gespannt blicke ich mich um. Jetzt ist
          es also wirklich soweit! Mit einer eleganten Bewegung, die ich diesem
          alten Mann gar nicht zugetraut hätte, schlänget sich der
          Weihnachtsmann durch den Kamin hinab ins Wohnzimmer. Dort legt er mich
          unter einem kleinen Tannenbaum ab. «So kleines Geschenk. Hier lasse
          ich dich alleine zurück.
        </p>
        <p>
          Denk immer daran: Es kommt nicht darauf an, wie fest deine Papier
          glänzt oder wie viele Kringel dein Geschenkband hat. Mit deiner
          Einzigartigkeit wirst du diesen kleinen Jungen sehr glücklich machen.
          Und das ist das Wichtigste an Weihnachten. Nämlich das Licht und die
          Liebe zu teilen!» Mit diesen Worten streicht mir der Weihnachtsmann
          noch einmal leicht über mein schmales rotes Band und verschwindet dann
          im Kamin. Wie er genau wieder raufkommt? Das würde ich auch gerne
          wissen. Aber ich schliesse glücklich meine Augen und freue mich auf
          den Moment, wenn ich ein Strahlen auf das Gesicht des Jungen zaubern
          kann.
        </p>
      </PageNoImage>
      <FullPage number={7} />
      <PageNoImage number={8}>
        <p>
          Lautes Getöse weckt mich am nächsten Morgen. «Mama, Papa! Schaut der
          Weihnachtsmann war hier. Und er hat mir ein wunderschönes Geschenk
          gebracht.» ruft eine junge Stimme freudig aus. Kleine Hände fahren
          vorsichtig über mein dunkelgrünes Papier. «Kann ich es jetzt öffnen?
          Kann ich?» Die Eltern müssen genickt haben, denn nun fühle ich, wie
          mein rotes Band gelöst wird. Es ist so weit. Ich blinzle geschwind
          zwischen den Wimpern hervor. Ein rundliches Jungengesicht mit
          zerzaustem Haar sitzt vor mir. Seine Augen glänzen. Das breite Lächeln
          reicht bis an die Ohren. Vor Aufregung zittern seine Hände, als der
          Junge mich sorgfältig auspackt. Endlich erfülle ich meine Bestimmung.
          Ich spüre Licht und Freude in mir aufsteigen – genauso habe ich mir
          Weihnachten immer erträumt.
        </p>
        <p></p>
      </PageNoImage>
      <FullPage number={9} />
      <FullPage number={10} />
      <PageCover>...und ein frohes neues Jahr!</PageCover>
    </HTMLFlipBook>
  );
};

export default Book;
