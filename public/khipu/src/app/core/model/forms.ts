export interface FormKhipu {
  name: string;
  start: string;
  ends: string;
  members: Member[];
  softwares: Software[];
  summary: string;
  objectives: string;
  type: string;
}

interface Member {
  users: {
    email: string;
    nombre: string;
    username: string;
    type: string;
  };
  isPrincipalResearcher: boolean;
}

interface Software {
  name: string;
  license: boolean;
}
