

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component';
import { RequisicaoDoExameComponent } from './requisicao-do-exame/requisicao-do-exame.component';
import { BancoDeSangueComponent } from './banco-de-sangue/banco-de-sangue.component';
import { FichasMedicasComponent } from './fichas-medicas/fichas-medicas.component';
import { AgendamentoDeDoacoesComponent } from './agendamento-de-doacoes/agendamento-de-doacoes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { VisualizacaoAgendamentosComponent } from './visualizacao-agendamentos/visualizacao-agendamentos.component';
import { VisualizacaoFichasMedicasComponent } from './visualizacao-fichas-medicas/visualizacao-fichas-medicas.component';
import { ListagemDeUsuariosComponent } from './listagem-de-usuarios/listagem-de-usuarios.component';
import { VisualizacaoRequisicaoExamesComponent } from './visualizacao-requisicao-exames/visualizacao-requisicao-exames.component';
import { DashboardHemopeComponent } from './dashboard-hemope/dashboard-hemope.component';
import { AgendamentoDoacoesHemopeComponent } from './agendamento-doacoes-hemope/agendamento-doacoes-hemope.component';
import { SolicitacaoDeSangueComponent } from './solicitacao-de-sangue/solicitacao-de-sangue.component';
import { VisualizacaoSolicitacoesComponent } from './visualizacao-solicitacoes/visualizacao-solicitacoes.component';
import { CadastroTecnicosComponent } from './cadastro-tecnicos/cadastro-tecnicos.component';
//import { ListagemTecnicosComponent } from './listagem-tecnicos/listagem-tecnicos.component';
import { InformacoesSobreDoacaoComponent } from './informacoes-sobre-doacao/informacoes-sobre-doacao.component';

import { AuthGuard } from './auth-guard.service';

const APP_ROUTES: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'cadastro', component: CadastroComponent }, 
{ path: 'requisicao-do-exame', component: RequisicaoDoExameComponent },
{ path: 'banco-de-sangue', component: BancoDeSangueComponent },
{ path: 'fichas-medicas', component: FichasMedicasComponent },
{ path: 'agendamento-de-doacoes', component: AgendamentoDeDoacoesComponent },
{ path: 'login-google', component: LoginGoogleComponent },
{ path: 'dashboard', component: DashboardComponent},
{ path: 'dashboard-hemope', component: DashboardHemopeComponent},
{ path: 'visualizacao-agendamentos', component: VisualizacaoAgendamentosComponent },
{ path: 'visualizacao-fichas-medicas', component: VisualizacaoFichasMedicasComponent },
{ path: 'listagem-de-usuarios', component: ListagemDeUsuariosComponent },
{ path: 'visualizacao-requisicao-exames', component: VisualizacaoRequisicaoExamesComponent },
{ path: 'agendamento-de-doacoes-hemope', component: AgendamentoDoacoesHemopeComponent },
{ path: 'solicitacao-de-sangue', component: SolicitacaoDeSangueComponent },
{ path: 'visualizacao-solicitacoes', component: VisualizacaoSolicitacoesComponent },
{ path: 'cadastro-tecnicos', component: CadastroTecnicosComponent },
//{ path: 'listagem-tecnicos', component: ListagemTecnicosComponent },
{ path: 'informacoes-sobre-doacao', component: InformacoesSobreDoacaoComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
