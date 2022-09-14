<template>
    <div>
        <v-container fluid class="px-16">
            <v-row class="mt-10">
                <v-col cols="4" align="start" align-self="center">
                    <v-select v-model="landing" :items="landings" item-text="name" item-value="name" class="rounded-lg" filled label="Seleccione una opcion"></v-select>
                </v-col>
                <v-col cols="8" align="end" align-self="center">
                    <p class="font-weight-bold text-capitalize font-monserrat">{{date.toLocaleDateString('es-MX', opciones)}}</p>
                </v-col>
            </v-row>
            <v-row class="mb-16" v-if="landing !== ''">
                <v-col cols="5">
                    <v-card>
                        <v-card-title>
                            <p class="font-size-16">Total de Codigos <br> <span class="text-h4">{{getTotal}}</span></p>
                        </v-card-title>
                        <Doughnut
                            :chart-options="chartOptions"
                            :chart-data="chartTotalCodigo"
                            chart-id="doughnut-chart"
                            dataset-id-key="label"
                            :plugins="[]"
                            css-classes=""
                            :styles="{}"
                            :width="400"
                            :height="370"
                        />
                    </v-card>
                </v-col>
                <v-col cols="7">
                    <v-card>
                        <v-card-title>
                            <v-row>
                                <v-col cols="8">
                                    <p class="font-size-16">
                                        Códigos por periodo <br>
                                        <span class="font-size-14 font-monserrat">Total de códigos redimidos por un periodo de tiempo.</span>
                                    </p>
                                </v-col>
                                <v-col cols="4">
                                    <v-btn-toggle v-model="toggle_exclusive" mandatory color="white">
                                        <v-btn  @click="changeDay">
                                            <span :class="{'green-text': toggle_exclusive === 0}">Dia</span>
                                        </v-btn>
                                        <v-btn @click="changeWeek" class="green-text">
                                           <span :class="{'green-text': toggle_exclusive === 1}">Semana</span>
                                        </v-btn>
                                        <v-btn @click="changeMonth">
                                            <span :class="{'green-text': toggle_exclusive === 2}">Mes</span>
                                        </v-btn>
                                    </v-btn-toggle>
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <LineChartGenerator
                            :chart-options="chartOptions"
                            :chart-data="chartPeriodos"
                            chart-id="line-chart"
                            dataset-id-key="label"
                            :plugins="[]"
                            css-classes=""
                            :styles="{}"
                            :height="370"
                        />
                    </v-card>
                </v-col>

                <v-col cols="5">
                    <v-card>
                        <v-card-title>
                            <p class="font-size-16 font-monserrat">% de redenciones <br> <span class="text-h4">{{getPorcetaje.toFixed(2)}}%</span></p>
                        </v-card-title>
                        <Doughnut
                            :chart-options="chartOptions"
                            :chart-data="chartRedenciones"
                            chart-id="doughnut-chart"
                            dataset-id-key="label"
                            :plugins="[]"
                            css-classes=""
                            :styles="{}"
                            :width="400"
                            :height="370"
                        />
                    </v-card>
                </v-col>
                <v-col cols="7">
                    <v-card class="rounded-lg">
                        <v-card-title class="font-size-16 font-monserrat">Códigos redimidos</v-card-title>
                        <v-simple-table class="overflow-y-auto" height="420">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Codigo</th>
                                        <th class="text-left">Correo</th>
                                        <th class="text-left">Fecha</th>
                                    </tr>
                                </thead>
                        <tbody>
                            <tr
                            v-for="item in desserts"
                            :key="item.name"
                            >
                            <td>{{ item.codigo }}</td>
                            <td>{{ item.correo }}</td>
                            <td>{{ item.fecha }}</td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs/legacy'
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'


import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement)


export default {
    components: {
        Doughnut, LineChartGenerator
    },
    data(){
        return {
            date: new Date(),
            opciones: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
            landings: [
                {name: 'Direc TV'},
                {name: 'Clio TV'},
                {name: 'Vix'},
                {name: 'Radio Formula'},
            ],
            landing: '',
            desserts: [
                {
                    codigo: 'CDH2389',
                    correo: 'info@applab.mx',
                    fecha: '06/Sep/2022'
                },
                {
                    codigo: 'CDH2389',
                    correo: 'info@applab.mx',
                    fecha: '06/Sep/2022'
                },
                {
                    codigo: 'CDH2389',
                    correo: 'info@applab.mx',
                    fecha: '06/Sep/2022'
                },
                {
                    codigo: 'CDH2389',
                    correo: 'info@applab.mx',
                    fecha: '06/Sep/2022'
                },
                {
                    codigo: 'CDH2389',
                    correo: 'info@applab.mx',
                    fecha: '06/Sep/2022'
                },
                {
                    codigo: 'CDH2389',
                    correo: 'info@applab.mx',
                    fecha: '06/Sep/2022'
                },
                {
                    codigo: 'CDH2389',
                    correo: 'info@applab.mx',
                    fecha: '06/Sep/2022'
                },
                {
                    codigo: 'CDH2389',
                    correo: 'info@applab.mx',
                    fecha: '06/Sep/2022'
                },
                
            ],
            chartTotalCodigo: {
                labels: ['Redimidos', 'Sin redimir'],
                datasets: [
                    {
                        backgroundColor: ['#BAD543', '#301C3D'],
                        data: [160, 194]
                    }
                ]
            },
            chartRedenciones: {
                labels: ['Redimidos', 'Sin redimir'],
                datasets: [
                    {
                        backgroundColor: ['#BAD543', '#828282'],
                        data: [160, 194]
                    }
                ]
            },
            chartPeriodos: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July'
                ],
                datasets: [
                    {
                        label: 'Cantidad de códigos redimidos',
                        backgroundColor: '#BAD543',
                        data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            },
            toggle_exclusive: 1
        }
    },
    methods: {
        changeDay(){
            const days = [
                    'Lunes',
                    'Martes',
                    'Miercoles',
                    'Jueves',
                    'Viernes',
                    'Sabado',
                    'Domingo'
                ]
            this.chartPeriodos.labels = days
        },
        changeWeek(){
            const weeks = [
                    'Lunes',
                    'Martes',
                    'Miercoles',
                    'Jueves',
                    'Viernes',
                    'Sabado',
                    'Domingo'
                ]
            this.chartPeriodos.labels = weeks
        },
        changeMonth(){
            const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July'
                ]
            this.chartPeriodos.labels = months
        },
    },
    computed: {
        getTotal(){
            const total = this.chartTotalCodigo.datasets[0].data
            return total.reduce((a,b) => a+b, 0)
        },
        getPorcetaje(){
            const total = this.getTotal
            const redimidos = this.chartTotalCodigo.datasets[0].data[0]

            return (redimidos * 100) / (total)
        }
    }
}
</script>

<style>

</style>