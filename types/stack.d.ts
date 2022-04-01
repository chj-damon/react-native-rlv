type AuthStackParamList = {
  SignIn: undefined;
  ConfigPass: undefined;
  ForgetPass: undefined;
  Register: undefined;
  Privacy: undefined;
  UserAgreement: undefined;
  ModifyPasswordResult: undefined;
};

type MainStackParamList = {
  Tab: undefined;
  Homepage: undefined;
  IndexBarDemo: undefined;
  LocalModelDemo: undefined;
  RecyclerListDemo: undefined;
  RecyclerListDemo1: undefined;
  RecyclerListDemo2: undefined;
  RecyclerListDemo3: undefined;
  RecyclerListDemo4: undefined;
  RecyclerListDemo5: undefined;
  Mine: undefined;
  Address: undefined;
  Echarts: undefined;
  LineChart: undefined;
  MapChart: undefined;
  Settings: undefined;
  ModifyPassword: undefined;
  ModifyPasswordResult: undefined;
};

type AppParamList = AuthStackParamList & MainStackParamList;
