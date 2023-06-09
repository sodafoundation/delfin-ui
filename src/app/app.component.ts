import { Component, OnInit, ViewContainerRef, ViewChild, Directive, ElementRef, HostBinding, HostListener, AfterViewInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { I18NService, Consts, ParamStorService, MsgBoxService, Utils, HttpService } from 'app/shared/api';
import { Button } from 'app/components/button/button';
import { I18nPluralPipe } from '@angular/common';
import { MenuItem, ConfirmationService, SelectItem, Message} from './components/common/api';
import { JoyrideService } from 'ngx-joyride';

let d3 = window["d3"];
declare let X2JS: any;
let _ = require("underscore");

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [MsgBoxService, ConfirmationService],
    styleUrls: []
})
export class AppComponent implements OnInit, AfterViewInit {
    
    chromeBrowser: boolean = false;

    dropMenuItems: MenuItem[];

    isHomePage: boolean = true;

    showErrorMsg: boolean = false;
    errorMsg: string = "";
    showPrompt = false;
    fileName: string = "";
    tenantItems = [];
    projectItemId;
    userId;
    menuItems = [];
    tourSteps = [];

    msgs: Message[];
        
    menuItems_admin = [
        {
            "title": "Resource Monitor",
            "description": "SODA Storage Infrastructure Manager",
            "routerLink": "/resource-monitor",
            "joyrideStep" : "menuDelfin",
            "text" : "delfin is the SODA Infrastructure Manager project which provides unified, intelligent and scalable resource management, alert and performance monitoring",
            "group" : true,
            "children" : [
                {
                    "title" : "Storage Summary",
                    "routerLink": "/resource-monitor"
                },
                {
                    "title" : "Performance Monitor",
                    "routerLink": "/performance-monitor"                    
                },
                {
                    "title" : "Alert Manager",
                    "is_external_link" : true,
                    "link" : "http://" + Consts.SODA_HOST_IP + ":" + Consts.SODA_ALERTMANAGER_PORT
                },
            ]
        }
    ];

    tourSteps_admin = [
        'homeWelcome',
        'menuDelfin'
    ];
    tourSteps_tenant = [
        'homeWelcome',
        'menuHome'
    ];
    activeItem: any;

    constructor(
        private el: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private http: Http,
        private httpSvc: HttpService,
        private router: Router,
        private paramStor: ParamStorService,
        private msg: MsgBoxService,
        private confirmationService: ConfirmationService,
        public I18N: I18NService,
        private readonly joyrideService: JoyrideService
    ) { }

    // Wave params
    svg_height = 150;
    svg_width = 2000;
    wave_data = [[], []];
    area = d3.area().y0(this.svg_height).curve(d3.curveBasis);
    svg_paths = [];
    max = 800;  // Speed
    d;

    ngOnInit() {
       this.isHomePage = false;
       this.menuItems = this.menuItems_admin;
        this.tourSteps = this.tourSteps_admin;
        this.dropMenuItems = [
            {
                
            }
        ];
       this.router.navigate(['/resource-monitor']);
    }


    openAlertsManager(){
        window.open("http://" + Consts.SODA_HOST_IP + ":" + Consts.SODA_ALERTMANAGER_PORT + "/#/alerts", "_blank")
    }
    
    /* Joyride */
    stepVisible: any;
    title: any;
    toggleAction() {
        this.stepVisible = true;
    }
    stepDone() {
        setTimeout(() => {
            this.title = 'Tour Finished!';
            
        }, 3000);
    }
    onPrev() {
        
    }
    startTour() {
        const options = {
            steps: this.tourSteps,
            // startWith: 'step3@app',
            // waitingTime: 3000,
            //stepDefaultPosition: 'top',
            themeColor: '#243680',
            showPrevButton: true,
            logsEnabled: true
            // customTexts: { prev: of('<<').pipe(delay(2000)), next: '>>'}
        };
        this.joyrideService.startTour(options).subscribe(
            step => {
                let scrollElm = document.scrollingElement;
                scrollElm.scrollTop = 0;
            },
            e => {
                console.log('Error', e);
            },
            () => {
                this.stepDone();
                
            }
        );
    }
    /* Joyride ends */

    openUserGuide(){
        this.isHomePage = false;
        this.router.navigate(['/help']);
    }


    ngAfterViewInit() {
        
    }

    menuItemClick(event, item) {
        this.activeItem = item;
        if (item.routerLink == "/home") {
            this.isHomePage = true;
        } else {
            this.isHomePage = false;
        }
    }

    supportCurrentBrowser() {
        let ie,
            firefox,
            safari,
            chrome,
            cIE = 11,
            cFirefox = 40,
            cChrome = 40;
        let ua = navigator.userAgent.toLowerCase();
        let isLinux = (ua.indexOf('linux') >= 0);

        if (this.isIE()) {
            if (ua.indexOf('msie') >= 0) {
                ie = this.getSys(ua.match(/msie ([\d]+)/));
            } else {
                ie = this.getSys(ua.match(/trident.*rv:([\d]+)/));
            }
        } else if (navigator.userAgent.indexOf("Firefox") > 0) {
            firefox = this.getSys(ua.match(/firefox\/([\d]+)/));
        } else if (ua.indexOf("safari") != -1 && !(ua.indexOf("chrome") != -1)) {
            safari = this.getSys(ua.match(/version\/([\d]+)/));
        } else if (ua.indexOf("chrome") != -1) {
            chrome = this.getSys(ua.match(/chrome\/([\d]+)/));
        }

        if ((firefox) / 1 < cFirefox || (chrome) / 1 < cChrome || (ie) / 1 < cIE) {
            return true;
        }

        return false;
    }

    isIE() {
        return navigator.userAgent.toLowerCase().indexOf('trident') >= 0;
    }

    getSys(browserVersionArr) {
        if (!browserVersionArr) {
            return 0;
        } else if (browserVersionArr.length < 2) {
            return 0;
        } else {
            return browserVersionArr[1];
        }
    }

    area_generator(data) {
        let that = this;
        var wave_height = 0.45;
        var area_data = data.map(function (y, i) {
            return [i * that.d, that.svg_height * (1 - (wave_height * Math.sin(y * Math.PI) + 2) / 3)];
        });
        return function () {
            return that.area(area_data);
        };
    }
    renderWave() {
        let that = this;
        this.svg_paths.forEach(function (svg_path, i) {
            svg_path.attr('d', that.area_generator(that.wave_data[i]));
            that.wave_data[i] = that.getNextData(that.wave_data[i]);
        });

        setTimeout(function () {
            that.renderWave();
        }, 1000 / 60);
    }
    getNextData(data) {
        var r = data.slice(1);
        r.push(data[0]);
        return r;
    }

}
