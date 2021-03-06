export const types = {
    adminUpload: '[admin] upload',
    adminMovies: '[admin] movies',
    adminGenerate: '[admin] generate',
    adminCodes: '[admin] codes',
    adminUsers: '[admin] users',

    uploadSubmit: '[upload] submit',
    uploadImageCompleted: '[upload] image completed',
    uploadVideocompleted: '[upload] video completed',
    uploadCompleted: '[upload] completed',
    uploadRemoveCompleted: '[upload] remove completed',
    uploadReset: '[upload] reset',

    moviesSet: '[movies] start getting',
    moviesRemove: '[movies] remove',
    moviesSetSelected: '[movies] set selected',
    moviesUnsetSelected: '[movies] unset selected',
    moviesNotFound: '[movies] not found',
    moviesUnsetNotFound: '[movies] unset not found',
    moviesSetGenderSearched: '[movies] set selected gender',
    moviesUnsetGender: '[movies] unset gender selected',
    moviesSetSearchValue: '[movies] set search value',
    moviesUnsetSearchValue: '[movies] unset search value',
    moviesSetFavorites: '[movies] set favorites',
    moviesAddToFavoritesList: '[movies] add to favorites list',
    moviesRemoveFromFavoritesList: '[movies] remove from favoritesList',
    moviesResetFavoritesList: '[movies] reset favoritesList',

    authLogin: '[Auth] login',
    authLogout: '[Auth] logout',
    authCheckingFinish: '[Auth] finish login',
    authSetUserCreated: '[Auth] set user created',
    authUserUpdate: '[Auth] user update',
    authRemoveUserCreated: '[Auth] remove user created',
    authUpdateImageProfile: '[Auth] update image profile',

    uiStartLoading: '[UI] start Loading',
    uiFinishLoading: '[UI] finish Loading',

    uiSetMessage: '[UI] set message',
    uiResetMessage: '[UI] reset message',
    
    uiSetError: '[UI] set error',
    uiRemoveError: '[UI] remove error',

    uiSetCompleted: '[UI] set completed',
    uiResetCompleted: '[UI] reset completed',

    roleAdmin: 'd04c3ff2-9f30-451b-a7d9-e310b0cf10e8',
    roleUser: '81a599ea-0480-460c-92bb-911fc4ff3631',

    codeCreated: '[Code] created',
    codeRemoveCreated: '[Code] remove created',
    codeSetList: '[Code] set list',
    codeRemoveAll: '[Code] remove all',
    codeRemove: '[Code] remove',
    codeAdd: '[Code] add',

    userSet: '[User] set',
    userRemove: '[User] remove',

    optionProfile: '[OptionProfile]',
    optionPassword: '[OptionPassword]'
}