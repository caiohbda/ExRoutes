import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mb30 mt30">
            <Card title="Pagina de inscrição" />
          </div>
          <div className="dflex">
            <Link to="/promotion">
              <Button text="Inscrição" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
