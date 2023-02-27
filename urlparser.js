module.exports = urlParser = (urlFormat, urlInstance) => {
    const keys = urlFormat.split("/")
    .map((key, pos) => [key, pos])
    .filter(([key,]) => key.startsWith(":"));


    const [path, query = ""] = urlInstance.split("?");
    const pathParts = path.split("/");
    const entries = keys.map(([key, pos]) => {
        const val = pathParts[pos];
        return [key.replace(":", ""), isNaN(val) ? val : Number(val)];
    });

    const searchParams = query.split("&").map(qParam => {
        const [key, val] =  qParam.split("=");
        return [key, isNaN(val) ? val : Number(val)];
    });
    return Object.fromEntries(query ? [...entries, ...searchParams] : entries);
    
  
};