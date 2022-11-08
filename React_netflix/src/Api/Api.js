const API = {
    getRecommenedGenreList: () => {
        return {
            recommenedGenreList: [{
                    genreId : 1,
                    name : '드라마',
                    artList: [
                        {
                            artId : 101,
                            thumbnailUrl : "./img/slider1ImgItem1.webp",
                            videoUrl : "./img/video/BreakingBadVideo.mov",
                            interestPercent: 96.3,
                            ageRestricted: 15,
                            episodeCount: 16,
                            videoQuality: 'HD',
                            genreDescriptionList: ['진심 어린', '드라마'],
                        },
                        {
                            artId : 102,
                            thumbnailUrl : "./img/slider1ImgItem2.webp",
                            videoUrl : "./img/video/BreakingBadVideo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        }
                    ]
    
                }
            ]
        }
    },
    getArt: (artId) => {
        return  {
            artId : 101,
            title: '이상한 변호사 우영우',
            thumbnailUrl : "./img/slider1ImgItem2.webp",
            videoUrl : "./img/video/BreakingBadVideo.mov",
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
                    
                },
            ]
        }
        
    }
}

export default API;