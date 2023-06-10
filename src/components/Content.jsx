import productImg from "../img/product.png";
import application from "../img/lication.png";

export default function Content() {
  return (
    <div class="py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div class="h-128 object-contain rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                // src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                src={productImg}
                loading="lazy"
                alt="product"
                class="h-full w-full object-cover object-center"
              />
              <img
                src={application}
                loading="lazy"
                alt="product"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div class="md:pt-8">
            <p class="text-center font-bold text-indigo-500 md:text-left">
              Qual seu processo produtivo ?
            </p>

            <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              O Que São Microagulhas DermaDose?
            </h1>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Nossos adesivos com microagulhas oferecem uma abordagem inovadora
              e eficaz no tratamento da diabetes, proporcionando conveniência,
              precisão e conforto aos pacientes.
              <br />
              <br />
              Ao serem aplicados na pele, as microagulhas penetram suavemente
              para administrar a medicação de forma controlada e gradual,
              oferecendo um processo praticamente indolor e não invasivo.
              <br />
              <br />
              Nossa tecnologia elimina a necessidade de agulhas tradicionais,
              resultando em melhores resultados e qualidade de vida para os
              pacientes diabéticos.
            </p>

            <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              Processo produtivo
            </h2>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Os adesivos com microagulhas da Dermodose são produzidos com
              ingredientes de alta qualidade, como Metformina, PVA, PVP, AT e
              NaHCO3. O processo produtivo garante a estabilidade do
              medicamento, com operações de centrifugação e secagem. Esses
              adesivos são não invasivos, oferecem liberação controlada do
              medicamento, são indolores e armazenados adequadamente,
              proporcionando um tratamento seguro, eficaz e conveniente para a
              diabetes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
