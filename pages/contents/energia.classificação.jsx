import { Container }  from 'react-bootstrap';

export default function EnergiaClassificacao() {
    return (
    <div className="mt-5 container-fluid">
        <h2 className="font-weight-normal text-center mb-4">Classificação das fontes energéticas</h2>
        <Container>
            <p>Cada fonte energética existente possui sua classificação, seja ela renovável ou não
                renovável.
            </p>
            <h4>Fontes renováveis</h4>
            <p>As fontes renováveis são aquelas que em particular, podem se auto regenerar ou por ações
                humanasos recursos naturais. Podem ser considerados como fontes energéticas limpas.</p>
            <ol className="lista">
                <li>Usina Hidrelétrica</li>
                <li>Solar</li>
                <li>Geotérmica</li>
                <li>Biomassa</li>
                <li>Eólica</li>
            </ol>
            <h4>Fontes não renováveis</h4>
            <p>As fontes não renováveis são aquelas que se encontram na natureza em grandes quantidades, mas
                uma
                vez esgotadas, não podem mais ser regeneradas.</p>
            <ol>
                <li>Unisa Nuclear</li>
                <li>Petróleo</li>
                <li>Carvão Mineral</li>
            </ol>
        </Container>
    </div>
    );

}