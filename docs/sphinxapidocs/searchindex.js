Search.setIndex({docnames:["index"],envversion:53,filenames:["index.rst"],objects:{"akebono.dataset":{Dataset:[0,0,1,""],get_dataset:[0,3,1,""]},"akebono.dataset.Dataset":{get_predictor_target:[0,1,1,""],value:[0,2,1,""]},"akebono.model":{WrappedModel:[0,0,1,""],get_model:[0,3,1,""]},"akebono.model.WrappedModel":{base_init_finished:[0,1,1,""],dump:[0,1,1,""],evaluate:[0,1,1,""],fit:[0,1,1,""],load:[0,1,1,""],predict:[0,1,1,""],predict_proba:[0,1,1,""],reset:[0,1,1,""],set_model_type:[0,1,1,""],value:[0,2,1,""]},"akebono.operator":{predict:[0,3,1,""],train:[0,3,1,""]},"akebono.preprocessor":{ApplyPca:[0,0,1,""],ApplyStandardScaler:[0,0,1,""],ExcludeColumns:[0,0,1,""],Identify:[0,0,1,""],PreprocessorPipeline:[0,0,1,""],SelectColumns:[0,0,1,""],StatefulPreprocessor:[0,0,1,""],StatelessPreprocessor:[0,0,1,""],get_preprocessor:[0,3,1,""]},"akebono.preprocessor.ApplyPca":{process:[0,1,1,""],reset:[0,1,1,""],set_operation_mode:[0,1,1,""],value:[0,2,1,""]},"akebono.preprocessor.ApplyStandardScaler":{process:[0,1,1,""],reset:[0,1,1,""],set_operation_mode:[0,1,1,""],value:[0,2,1,""]},"akebono.preprocessor.ExcludeColumns":{process:[0,1,1,""]},"akebono.preprocessor.Identify":{process:[0,1,1,""]},"akebono.preprocessor.PreprocessorPipeline":{dump_with_operation_rule:[0,1,1,""],load_with_operation_rule:[0,1,1,""],process:[0,1,1,""]},"akebono.preprocessor.SelectColumns":{process:[0,1,1,""]},"akebono.preprocessor.StatefulPreprocessor":{dump:[0,1,1,""],load:[0,1,1,""],process:[0,1,1,""],reset:[0,1,1,""],set_operation_mode:[0,1,1,""],value:[0,2,1,""]},"akebono.preprocessor.StatelessPreprocessor":{process:[0,1,1,""]},"akebono.settings":{apply:[0,3,1,""],get_predict_configs:[0,3,1,""],get_train_configs:[0,3,1,""],reset:[0,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:function"},terms:{"0x1006c0b00":0,"0x11291acc0":0,"\u3068\u3059\u308b":0,"\u306e\u5f15\u6570":0,"\u306e\u7d42\u4e86\u5f8c\u306b\u5b9f\u884c\u3055\u308c\u308b\u30e1\u30bd\u30c3\u30c9":0,"\u3092\u3057\u305f\u5834\u5408\u306e":0,"\u3092\u8fd4\u3059\u30e1\u30bd\u30c3\u30c9":0,"\u30b7\u30ca\u30ea\u30aa\u306b\u4ed8\u4e0e\u3055\u308c\u308b\u30bf\u30b0":0,"\u30b7\u30ca\u30ea\u30aa\u4e2d\u306b\u304a\u3051\u308b\u4e88\u6e2c\u5b9f\u884c\u306e\u8b58\u5225\u5b50":0,"\u30b7\u30ca\u30ea\u30aa\u4e2d\u306b\u304a\u3051\u308b\u8a13\u7df4\u5b9f\u884c\u306e\u8b58\u5225\u5b50":0,"\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u6c38\u7d9a\u5316\u3055\u308c\u3066\u3044\u308bstatefulpreprocessor\u3092pipeline\u306b\u5fa9\u5143\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u6c38\u7d9a\u5316\u3055\u308c\u3066\u308b\u30e2\u30c7\u30eb\u3092\u5fa9\u5143\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u6c38\u7d9a\u5316\u3055\u308c\u3066\u308bpreprocessor\u3092\u5fa9\u5143\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30d1\u30b9":0,"\u30c6\u30b9\u30c8\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u6301\u3064\u8aac\u660e\u5909\u6570":0,"\u30d5\u30a1\u30a4\u30eb\u540d":0,"\u30e2\u30c7\u30eb":0,"\u30e2\u30c7\u30eb\u306e\u30bf\u30a4\u30d7":0,"\u30e2\u30c7\u30eb\u306e\u30bf\u30a4\u30d7\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"\u30e2\u30c7\u30eb\u306e\u521d\u671f\u5316\u306b\u7528\u3044\u308b\u30e1\u30bd\u30c3\u30c9":0,"\u30e2\u30c7\u30eb\u306e\u5b9f\u4f53":0,"\u30e2\u30c7\u30eb\u306e\u8a13\u7df4\u306b\u7528\u3044\u308b\u30e1\u30bd\u30c3\u30c9":0,"\u30e2\u30c7\u30eb\u306e\u8a13\u7df4\u3092\u5b9f\u884c\u3059\u308b\u304b\u306e\u30d5\u30e9\u30b0":0,"\u30e2\u30c7\u30eb\u306e\u8a13\u7df4\u3092\u5b9f\u884c\u3059\u308b\u95a2\u6570":0,"\u30e2\u30c7\u30eb\u306e\u8a55\u4fa1\u3092\u5b9f\u884c\u3059\u308b\u304b\u306e\u30d5\u30e9\u30b0":0,"\u30e2\u30c7\u30eb\u306e\u8a55\u4fa1\u6642\u306b\u6e21\u3055\u308c\u308b\u30d1\u30e9\u30e1\u30fc\u30bf":0,"\u30e2\u30c7\u30eb\u3092\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u6c38\u7d9a\u5316\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"\u30e2\u30c7\u30eb\u3092\u8a55\u4fa1\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"\u30e2\u30c7\u30eb\u5b9f\u4f53\u304c\u78ba\u7387\u3092\u8fd4\u3059\u4e88\u6e2c":0,"\u30e2\u30c7\u30eb\u5b9f\u4f53\u306e\u521d\u671f\u5316\u6642\u306b\u6e21\u3055\u308c\u308b\u30d1\u30e9\u30e1\u30fc\u30bf":0,"\u30e2\u30c7\u30eb\u5b9f\u4f53\u306e\u8a13\u7df4\u6642\u306b\u6e21\u3055\u308c\u308b\u30d1\u30e9\u30e1\u30fc\u30bf":0,"\u4e88\u6e2c\u3067\u4f7f\u3046\u30e2\u30c7\u30eb\u306etrain_id":0,"\u4e88\u6e2c\u306e\u30bf\u30a4\u30d7":0,"\u4e88\u6e2c\u3092\u5b9f\u884c\u3059\u308b\u95a2\u6570":0,"\u4e88\u6e2c\u7d50\u679c":0,"\u4e88\u6e2c\u7d50\u679c\u304c\u683c\u7d0d\u3055\u308c\u308b\u30ab\u30e9\u30e0\u540d":0,"\u4e88\u6e2c\u7d50\u679c\u306b\u542b\u3081\u308b\u3079\u304d\u8aac\u660e\u5909\u6570\u306e\u30ab\u30e9\u30e0\u540d\u306e\u30ea\u30b9\u30c8":0,"\u4e88\u6e2c\u7d50\u679c\u306e\u6c38\u7d9a\u5316\u3092\u5b9f\u884c\u3059\u308b\u304b\u306e\u30d5\u30e9\u30b0":0,"\u4e88\u6e2c\u7d50\u679c\u306e\u8a2d\u5b9a":0,"\u4e88\u6e2c\u7d50\u679c\u3092\u8fd4\u3059\u30e1\u30bd\u30c3\u30c9":0,"\u5165\u529b\u30c7\u30fc\u30bf\u304b\u3089":0,"\u5165\u529b\u30c7\u30fc\u30bf\u306bpca\u3092\u304b\u3051\u308bpreprocessor":0,"\u5165\u529b\u30c7\u30fc\u30bf\u3092\u305d\u306e\u307e\u307e\u8fd4\u3059preprocessor":0,"\u5165\u529b\u30c7\u30fc\u30bf\u3092\u6b63\u898f\u5316\u3059\u308bpreprocessor":0,"\u5168\u3066\u306e\u5834\u5408\u306f":0,"\u524d\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"\u524d\u51e6\u7406\u5b9f\u4f53":0,"\u524d\u51e6\u7406\u5b9f\u4f53\u306e\u521d\u671f\u5316\u30d1\u30e9\u30e1\u30fc\u30bf":0,"\u524d\u51e6\u7406\u5b9f\u4f53\u3092\u521d\u671f\u5316\u3059\u308b\u30e1\u30bd\u30c3\u30c9":0,"\u6307\u5b9a\u3057\u305f\u30ab\u30e9\u30e0\u306e\u307f\u3092\u9078\u629e\u3057\u3066\u8fd4\u3059preprocessor":0,"\u6307\u5b9a\u3057\u305f\u30ab\u30e9\u30e0\u306e\u307f\u3092\u9664\u5916\u3057\u3066\u8fd4\u3059preprocessor":0,"\u6b63\u4f8b\u306b\u76f8\u5f53\u3059\u308bindex":0,"\u6b63\u898f\u5316\u3059\u308b\u5bfe\u8c61\u306e\u30ab\u30e9\u30e0\u540d":0,"\u7279\u5fb4\u7528formatter\u306e\u8a2d\u5b9a":0,"\u72b6\u614b\u3092\u6301\u305f\u306a\u3044preprocessor":0,"\u72b6\u614b\u3092\u6301\u3064preprocessor":0,"\u76ee\u6a19\u7528formatter\u306e\u8a2d\u5b9a":0,"\u76ee\u7684\u5909\u6570":0,"\u76ee\u7684\u5909\u6570\u3092\u6574\u5f62\u3059\u308b\u305f\u3081\u306e\u95a2\u6570":0,"\u78ba\u7387":0,"\u8907\u6570\u306epreprocessor\u9023\u7d50\u3092\u62bd\u8c61\u5316\u3059\u308b\u305f\u3081\u306e\u30af\u30e9\u30b9":0,"\u8a13\u7df4\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304c\u6301\u3064\u8aac\u660e\u5909\u6570":0,"\u8a2d\u5b9a\u53ef\u80fd\u306a\u30bf\u30a4\u30d7\u306f":0,"\u8a2d\u5b9a\u53ef\u80fd\u306a\u5024\u306f":0,"\u8a2d\u5b9a\u53ef\u80fd\u5024\u306f":0,"\u8a55\u4fa1\u7d50\u679c\u306e\u6c38\u7d9a\u5316\u3092\u5b9f\u884c\u3059\u308b\u304b\u306e\u30d5\u30e9\u30b0":0,"\u8aac\u660e\u5909\u6570":0,"\u8aac\u660e\u5909\u6570\u3092\u6574\u5f62\u3059\u308b\u305f\u3081\u306e\u95a2\u6570":0,"\u9078\u629e\u5bfe\u8c61\u30ab\u30e9\u30e0\u540d\u306e\u30ea\u30b9\u30c8":0,"akebono\u306e\u8a2d\u5b9a":0,"class":0,"config\u3092\u9069\u7528\u3059\u308b\u305f\u3081\u306e\u95a2\u6570":0,"dataset\u304c\u7ba1\u7406\u3059\u308b\u30c7\u30fc\u30bf\u306e\u5b9f\u4f53":0,"dataset\u304c\u7ba1\u7406\u3059\u308b\u30c7\u30fc\u30bf\u306e\u8aac\u660e\u5909\u6570\u3068\u76ee\u7684\u5909\u6570\u306etuple\u3092\u8fd4\u3059":0,"dataset\u306b\u3064\u3044\u3066\u306e\u8a2d\u5b9a":0,"dataset\u306e\u8a2d\u5b9a":0,"dataset\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u95a2\u6570":0,"dataset\u4e2d\u3067\u9000\u907f\u3057\u305f\u30ab\u30e9\u30e0\u3092predict\u306e\u7d50\u679c\u306b\u52a0\u3048\u308b\u304b\u3092\u6c7a\u3081\u308b\u30d5\u30e9\u30b0":0,"dataset\u751f\u6210\u6642\u306b\u76ee\u7684\u5909\u6570\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u4f8b\u5916\u767a\u751f":0,"function":0,"import":0,"int":0,"model\u306b\u3064\u3044\u3066\u306e\u8a2d\u5b9a":0,"model\u306e\u8a2d\u5b9a":0,"model\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u95a2\u6570":0,"operation_mode\u3092\u8a2d\u5b9a\u3059\u308b\u30e1\u30bd\u30c3\u30c9":0,"pipeline\u306b\u542b\u307e\u308c\u308bpreprocessor\u306eprocess\u3092\u9806\u6b21\u76f4\u5217\u306b\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"pipeline\u306b\u542b\u307e\u308c\u308bstatefulpreprocessor\u3092\u6c38\u7d9a\u5316\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"predict_config\u306e\u30ea\u30b9\u30c8\u3092\u8fd4\u3059\u95a2\u6570":0,"preprocessor\u306b\u3064\u3044\u3066\u306e\u8a2d\u5b9a":0,"preprocessor\u306e\u8a2d\u5b9a":0,"preprocessor\u3092\u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u6c38\u7d9a\u5316\u3059\u308b\u305f\u3081\u306e\u30e1\u30bd\u30c3\u30c9":0,"preprocessor\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u95a2\u6570":0,"preprocessorpipeline\u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u306e\u30d5\u30e9\u30b0":0,"return":0,"train_config\u306e\u30ea\u30b9\u30c8\u3092\u8fd4\u3059\u95a2\u6570":0,"true":0,__init__:0,_model:0,all:0,append_evacuated_columns_en:0,appli:0,applypca:0,applystandardscal:0,arrai:0,base_init_finish:0,binary_classifi:0,bool:0,cache_en:0,column:0,config:0,cross_val_iter:0,datafram:0,dataset_config:0,df_test:0,df_train:0,dict:0,dirpath:0,dump:0,dump_result_en:0,dump_with_operation_rul:0,dumper_config:0,evacuated_column:0,evalu:0,evaluate_en:0,evaluate_kwarg:0,excludecolumn:0,fals:0,fit:0,fit_kwarg:0,fit_model_en:0,format_func_for_predictor:0,format_func_for_target:0,formatter_config_for_predictor:0,formatter_config_for_target:0,from:0,gener:0,get_dataset:0,get_model:0,get_predict_config:0,get_predictor_target:0,get_preprocessor:0,get_train_config:0,identifi:0,init_kwarg:0,interfac:0,is_rebuild:0,kfold:0,kwarg:0,like:0,list:0,load:0,load_with_operation_rul:0,loader_config:0,make_regress:0,method_typ:0,mode:0,model_config:0,model_select:0,model_typ:0,modul:0,multiple_classifi:0,n_featur:0,name:0,nois:0,none:0,numpi:0,object:0,panda:0,paramet:0,pipeline_en:0,pos_index:0,predict:0,predict_id:0,predict_proba:0,preprocessor_config:0,preprocessorpipelin:0,process:0,python:0,random_st:0,regressor:0,reset:0,result_predict_column:0,result_target_column:0,scenario_tag:0,selectcolumn:0,self:0,seri:0,set_model_typ:0,set_operation_mod:0,sklearn:0,sklearnrandomforestclassifi:0,sourc:0,statefulpreprocessor:0,statelesspreprocessor:0,str:0,target:0,target_column:0,train:0,train_id:0,tupl:0,type:0,usag:0,valu:0,wrappedmodel:0,wrappedsklearnrandomforestclassifi:0},titles:["akebono API documentation for developers"],titleterms:{akebono:0,api:0,dataset:0,develop:0,document:0,model:0,oper:0,preprocessor:0,set:0}})