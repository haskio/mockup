<template>
    <v-app app>
        <Topbar> </Topbar>
        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-card>
                            <v-card-title>
                                <v-col>
                                    <h6>产品名称</h6>
                                    <div> {{ mockupInfo !== undefined ? mockupInfo.title : "该产品不存在" }}</div>
                                </v-col>
                            </v-card-title>
                        </v-card>

                    </v-col>
                    <v-col>
                        <!-- <v-sheet min-height="80vh" rounded="3"> -->
                        <!-- <v-col>
                                <v-card class='ma-3' v-for="item in releaseList " :key="item.id">
                                    <v-row no-gutters>
                                        <v-col cols="1" class="d-flex  justify-left align-center mx-3" max-width="100">
                                            <v-chip max-height="100" max-width="100" color="pink" label class="white--text">
                                                {{ item.ID }} </v-chip>
                                        </v-col>
                                        <v-col>
                                            <v-card-text class="align-left mx-3">{{ item.releaseNote }}</v-card-text>

                                            <v-divider></v-divider>

                                            <v-card-text>
                                                <v-icon> mdi-calendar-month</v-icon>
                                                <span class="mr-2">{{ item.UpdatedAt  | dateformat('YYYY-MM-DD HH:ss') }}</span>
                                                <v-btn style="float: right;" @click="toHtml(item.mockup_html)">访问原型</v-btn>
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <div class="text-center">
                                    <v-pagination v-model="queryinfo.page" :length=" Math.ceil(this.total /queryinfo.pageSize)" total-visible="5" rounded="circle"  
                                    @input="getMockupInfo()"></v-pagination>
                                </div>
                            </v-col> -->

                        <v-timeline side="end" dense>
                            <v-timeline-item v-for="item in releaseList" :key="item.id" size="small" right>
                                <v-alert :value="true">
                                    <v-card>
                                        <v-card-title class="align-left mx-3">版本{{ item.ID }} :{{ item.title
                                        }}</v-card-title>

                                        <v-card-text>

                                            <v-row align="center" class="mx-0">
                                                <v-card-subtitle> <v-icon> mdi-calendar-month</v-icon>
                                                {{ item.UpdatedAt | dateformat('YYYY-MM-DD HH:ss') }}</v-card-subtitle>
                                            </v-row>
                                            <v-divider> </v-divider>
                                            <div v-dompurify-html ="item.releaseNote"></div>
                                        </v-card-text>
                                        <v-divider> </v-divider>

                                        <v-card-actions>
                                            <v-btn style="left: 45%;" @click="toHtml(item.mockup_html)">点击访问原型</v-btn>
                                        </v-card-actions>




                                    </v-card>

                                </v-alert>
                            </v-timeline-item>
                        </v-timeline>



                        <!-- </v-sheet> -->
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <Tooters></Tooters>
    </v-app>
</template>

<script>
import Topbar from '../components/Topbar.vue'
import Tooters from '../components/Footer.vue'
export default {
    name: 'Release',
    components: { Topbar, Tooters },
    data() {
        return {
            mockupInfo: {},
            queryinfo: {
                page: 1,
                pageSize: 10,
                mockupId: 0
            },
            releaseList: [],
            total: 0,
        };
    },

    mounted() {

    },
    created() {
        //console.log('id:', this.id);
        this.getMockupInfo();

    },

    methods: {
        //获取产品信息
        async getMockupInfo() {
            //console.log('http:', this.$http)
            const { data: res } = await this.$http.get(`pdguest/findPdUrl?shareUrl=${this.id}`)
            if (res.code == 0) {
                this.queryinfo.mockupId = res.data.repdMock.ID

                const { data: res1 } = await this.$http.get('pdguest/findPdRelease', {
                    params: {
                        page: this.queryinfo.page,
                        pageSize: this.queryinfo.pageSize,
                        mockupId: res.data.repdMock.ID,
                    }
                });
                this.releaseList = res1.data.list
                this.total = res1.data.total

                //console.log("list", this.releaseList);
            }

            this.mockupInfo = res.data.repdMock
            //console.log('info', this.mockupInfo);

        },

        toHtml(url) {
            const toUrl = this.$http.defaults.baseURL + '/' + url
            //console.log(toUrl);

            window.open(toUrl, '_blank')
        },


    },
    computed: {
        id() {
            return this.$route.params.id // 获取路由参数 id
        }
    }
};
</script>

<style lang="scss" scoped></style>