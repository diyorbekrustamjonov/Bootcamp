import resolvers from "./resolvers.js"
import { gql } from "apollo-server"
import { fileURLToPath } from "url"
import path from "path"
import fs from "fs"


const __dirname = path.dirname(fileURLToPath(import.meta.url))


const typeDefs = fs.readFileSync(path.resolve(__dirname, "schema.gql"), "utf-8")


export default {
    typeDefs: gql`${typeDefs}`,
    resolvers 
}