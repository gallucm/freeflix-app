export const types = {
    adminUpload: '[admin] upload',
    adminMovies: '[admin] movies',
    adminGenerate: '[admin] generate',
    adminCodes: '[admin] codes',
    adminMake: '[admin] make',

    uploadSubmit: '[upload] submit',
    uploadImageCompleted: '[upload] image completed',
    uploadVideocompleted: '[upload] video completed',
    uploadCompleted: '[upload] completed',
    uploadReset: '[upload] reset',

    movieStartLoading: '[movie] start loading',
    movieFinishLoading: '[movie] finish loading',
    movieStartGetting: '[movie] start getting',
    movieRemove: '[movie] remove',
    movieSetSelected: '[movie] set selected',
    movieUnsetSelected: '[movie] unset selected',
    movieNotFound: '[movie] not found',
    movieUnsetNotFound: '[movie] unset not found',

    authLogin: '[Auth] login',
    authLogout: '[Auth] logout',
    authCheckingFinish: '[Auth] finish login',
    authSetUserCreated: '[Auth] set user created',
    authRemoveUserCreated: '[Auth] remove user created',

    uiStartLoading: '[UI] start Loading',
    uiFinishLoading: '[UI] finish Loading',

    uiSetMessage: '[UI] set message',
    uiResetMessage: '[UI] reset message',
    
    uiSetError: '[UI] set error',
    uiRemoveError: '[UI] remove error',

    roleAdmin: 'd04c3ff2-9f30-451b-a7d9-e310b0cf10e8',
    roleUser: '81a599ea-0480-460c-92bb-911fc4ff3631',

    codeCreated: '[Code] created',
    codeRemoveCreated: '[Code] remove created',
    codeSetList: '[Code] set list'
}