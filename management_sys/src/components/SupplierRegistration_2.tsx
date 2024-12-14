import React, { useState } from 'react';
import { TiPlus, TiTimes } from 'react-icons/ti';
import './CadastroFornecedor.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type TwoStepCadastroFornecedorProps = {
  text?: string;
  onClose: () => void;
};

export function TwoStepCadastroFornecedor(props: TwoStepCadastroFornecedorProps) {
  // Controle da etapa atual
  const [step, setStep] = useState(1);

  // Estado dos dados do formulário
  const [formData, setFormData] = useState({
    fornecedorNome: '',
    cpfCnpj: '',
    email: '',
    bancoNome: '',
    contaNumero: '',
    centroCusto: '',
    emailAdicional: '',
    senha: '',
  });

  // Estado para validação
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Lidar com mudanças nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validação para o primeiro passo
  const validateStep1 = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!formData.fornecedorNome.trim()) tempErrors.fornecedorNome = 'Nome do fornecedor é obrigatório';
    if (!formData.cpfCnpj.trim()) tempErrors.cpfCnpj = 'CPF/CNPJ é obrigatório';
    if (!formData.bancoNome.trim()) tempErrors.bancoNome = 'Nome do banco é obrigatório';
    if (!formData.contaNumero.trim()) tempErrors.contaNumero = 'Número da conta é obrigatório';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Ir para o segundo passo
  const nextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  // Voltar ao primeiro passo
  const prevStep = () => {
    setStep(1);
  };

  // Lidar com envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cadastro salvo com sucesso!\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <div id="body">
      <form onSubmit={handleSubmit}>
        <div id="container">
          <div id="reader">
            <div id="capsula">
              <div id="icon">
                <TiPlus size="32" />
              </div>
              <div id="Texto">
                <p>{props.text}</p>
              </div>
            </div>

            <div id="fecharBtn">
              <button id="fechadura" type="button" onClick={props.onClose}>
                <TiTimes size="32" color="white" />
              </button>
            </div>
          </div>

          {/* Passo 1: Cadastro de Fornecedor */}
          {step === 1 && (
            <div id="main">
              <h2>Cadastro de Fornecedor</h2>
              <div id="inp1">
                <input
                  type="text"
                  name="fornecedorNome"
                  placeholder="Nome do fornecedor *"
                  value={formData.fornecedorNome}
                  onChange={handleChange}
                />
                {errors.fornecedorNome && <p style={{ color: 'red' }}>{errors.fornecedorNome}</p>}

                <input
                  type="text"
                  name="cpfCnpj"
                  placeholder="CPF/CNPJ *"
                  value={formData.cpfCnpj}
                  onChange={handleChange}
                />
                {errors.cpfCnpj && <p style={{ color: 'red' }}>{errors.cpfCnpj}</p>}
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email do fornecedor"
                value={formData.email}
                onChange={handleChange}
              />

              <div id="bancoInfo">
                <input
                  type="text"
                  name="bancoNome"
                  placeholder="Nome do banco *"
                  value={formData.bancoNome}
                  onChange={handleChange}
                />
                {errors.bancoNome && <p style={{ color: 'red' }}>{errors.bancoNome}</p>}

                <input
                  type="text"
                  name="contaNumero"
                  placeholder="Número da conta *"
                  value={formData.contaNumero}
                  onChange={handleChange}
                />
                {errors.contaNumero && <p style={{ color: 'red' }}>{errors.contaNumero}</p>}
              </div>

              <select name="centroCusto" value={formData.centroCusto} onChange={handleChange}>
                <option value="" disabled>
                  Centro de custo *
                </option>
                <option value="SUS">SUS</option>
                {/* Adicione mais opções aqui */}
              </select>

              <div id="footer">
                <button type="button" onClick={nextStep}>
                  Próximo
                </button>
              </div>
            </div>
          )}

          {/* Passo 2: Informações adicionais */}
          {step === 2 && (
            <div id="main">
              <h2>Informações Adicionais</h2>
              <input
                type="email"
                name="emailAdicional"
                placeholder="Email adicional"
                value={formData.emailAdicional}
                onChange={handleChange}
              />

              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
              />

              <div id="footer">
                <button type="button" onClick={prevStep}>
                  Voltar
                </button>
                <button type="submit">Salvar</button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}