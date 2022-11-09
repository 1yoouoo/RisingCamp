const API = {
    getRecommenedGenreList: () => {
        return {
            recommenedGenreList: [
                {
                    genreId : 1,
                    name : '드라마',
                    artList: [
                        {
                            artId : 101,
                            thumbnailUrl : "./img/slider1ImgItem1.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 96.3,
                            ageRestricted: 15,
                            episodeCount: 16,
                            videoQuality: 'HD',
                            genreDescriptionList: ['진심 어린', '드라마'],
                        },
                        {
                            artId : 102,
                            thumbnailUrl : "./img/slider1ImgItem2.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 103,
                            thumbnailUrl : "./img/slider1ImgItem3.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 104,
                            thumbnailUrl : "./img/slider1ImgItem4.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 105,
                            thumbnailUrl : "./img/slider1ImgItem5.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                    ]
    
                },
                {
                    genreId : 2,
                    name : '영화',
                    artList: [
                        {
                            artId : 201,
                            thumbnailUrl : "./img/slider2ImgItem1.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 96.3,
                            ageRestricted: 15,
                            episodeCount: 16,
                            videoQuality: 'HD',
                            genreDescriptionList: ['진심 어린', '드라마'],
                        },
                        {
                            artId : 202,
                            thumbnailUrl : "./img/slider2ImgItem2.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 203,
                            thumbnailUrl : "./img/slider2ImgItem3.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 204,
                            thumbnailUrl : "./img/slider2ImgItem4.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 205,
                            thumbnailUrl : "./img/slider2ImgItem5.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                    ]
    
                },
                {
                    genreId : 3,
                    name : '애니',
                    artList: [
                        {
                            artId : 301,
                            thumbnailUrl : "./img/slider3ImgItem1.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 96.3,
                            ageRestricted: 15,
                            episodeCount: 16,
                            videoQuality: 'HD',
                            genreDescriptionList: ['진심 어린', '드라마'],
                        },
                        {
                            artId : 302,
                            thumbnailUrl : "./img/slider3ImgItem2.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 303,
                            thumbnailUrl : "./img/slider3ImgItem3.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 304,
                            thumbnailUrl : "./img/slider3ImgItem4.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                        {
                            artId : 305,
                            thumbnailUrl : "./img/slider3ImgItem5.webp",
                            videoUrl : "./img/video/WooYoungWoo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        },
                    ]
    
                },
            ]
        }
    },
    getArt: (artId) => {
        if((artId || '').length < 1) {
            console.log('Api.js ;;getArt 요청하지 마세요!!!!')
            return {};
        }
        
        return  {
            artId : 101,
            title: '이상한 변호사 우영우',
            thumbnailUrl : "./img/slider1ImgItem2.webp",
            videoUrl : "./img/video/WooYoungWoo.mov",
            interestPercent : 92.3,
            productionYear : 2022,
            ageRestricted : 18,
            episodeCount : 5,
            videoQuality : 'HD',
            artSummary : '천재적인 두뇌의 소유자 우영우. 대형 로펌의 신입 변호사이자 자폐 스펙트럼 장애를 가진 여성으로서 법정 안팎에서 다양한 난관을 해쳐간다.',
            actorList: ['박은빈', '강태오', '강기영'],
            genre : ['법정 시리즈', '한국 드라마', '사회 문제를 다룬 드라마'],
            genreDescriptionList : ['힐링', '감명을 주는', '드라마 장르'],
            episodeList : [
                {
                    episodeId : 10101,
                    episodeNumber : 1,
                    episodeThumbnail : './img/episodeImg/10101.jpeg',
                    episodeSubject : '이상한 변호사 우영우',
                    episodeSummary : '변호사 우영우의 첫 출근 날. 아군이 되어줄 동료와 냉소적인 상사, 그리고 오랜 지인을 만난다. 첫 사건으로는 노부부 폭행 사건을 맡게 되고.',
                    episodeDuration : '77'


                },
                {
                    episodeId : 10102,
                    episodeNumber : 2,
                    episodeThumbnail : "./img/episodeImg/10102.jpeg",
                    episodeSubject : '흘러내린 웨딩드레스',
                    episodeSummary : '딸의 결혼식에서 민망한 사고가 터지자 호텔을 고소한 신부의 아버지. 준호는 영우에게 고래 이야기는 점심시간에만 하자고 제안한다.',
                    episodeDuration : '69'


                },
                {
                    episodeId : 10103,
                    episodeNumber : 3,
                    episodeThumbnail : "./img/episodeImg/10103.jpeg",
                    episodeSubject : '펭수로 하겠습니다',
                    episodeSummary : '형제를 둘러싼 비극적인 사건으로 한 가족이 가슴 아픈 진실을 마주한다. 영우는 의뢰인과 소통해보려 애쓴다.',
                    episodeDuration : '69'


                },
                {
                    episodeId : 10104,
                    episodeNumber : 4,
                    episodeThumbnail : "./img/episodeImg/10104.jpeg",
                    episodeSubject : '삼형제의 난',
                    episodeSummary : '영우에게 법적 조언을 구하는 친구 동그라미. 아버지가 본의 아니게 어마어마한 빚을 졌다는게 사연인데. 한편 민우는 부당함에 분노한다.',
                    episodeDuration : '69'


                },
                {
                    episodeId : 10105,
                    episodeNumber : 5,
                    episodeThumbnail : "./img/episodeImg/10105.jpeg",
                    episodeSubject : '우당탕탕 VS 권모술수',
                    episodeSummary : '두 ATM 회사가 저작권을 두고 소송 싸움을 시작했다. 덕분에 사건을 맡은 영우와 민우도 치열한 경쟁을 벌이고. 그라미는 영우에게 상대의 거짓말을 알아채는 법을 가르쳐준다.',
                    episodeDuration : '69'


                },
            ]
        }
        
    }
}

export default API;